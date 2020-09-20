<template>
<div class="modal fade" id="checkoutModal" role="dialog" style="margin-top:10vh">
  <div class="modal-dialog">
    <form @submit.prevent="submit" class="modal-content" method="post" id="pay" name="pay">
      <div class="modal-header">
        Total a pagar: S/ {{ (transactionAmount).toFixed(2) }}
      </div>
      <div class="modal-body position-relative">
        <div class="loading d-flex align-items-center" v-if="loading === 1">
          <h3 class="text-center w-100">Procesando...</h3>
        </div>
        <div class="loading d-flex align-items-center" v-if="loading === 2">
          <h3 class="text-center w-100 text-success">Pago realizado correctamente</h3>
        </div>
        <div class="loading d-flex align-items-center" v-if="loading === 3">
          <h3 class="text-center w-100 text-danger">No pudimos procesar el pago, Revise los datos de la tarjeta</h3>
        </div>
        <div class="form-row">
          <div class="col-7">
            <label for="cardName">Nombre</label>
            <input id="cardholderName" data-checkout="cardholderName" v-model="cardholderName" type="text" class="form-control" placeholder="Nombres" required>
          </div>
          <div class="col-5">
            <label for="cardNumber">Número</label>
            <input id="cardNumber" data-checkout="cardNumber" @input="guessPaymentMethod" type="text" class="form-control" placeholder="5031 7557 3453 0604" required>
          </div>
        </div>
        <br>
        <div class="form-row">
          <div class="col-4">
            <label for="card_month">Mes</label>
            <select id="cardExpirationMonth" data-checkout="cardExpirationMonth" class="form-control" required>
              <option v-for="(item, index) in months"  :value="item" :key="index">{{ item }}</option>
            </select>
          </div>
          <div class="col-4">
            <label for="card_year">Año</label>
            <select id="cardExpirationYear" data-checkout="cardExpirationYear" class="form-control" required>
              <option v-for="(item, index) in years"  :value="item" :key="index">{{ item }}</option>
            </select>
          </div>
          <div class="col-4">
            <label for="card_year">CVV</label>
            <input id="securityCode" data-checkout="securityCode" type="text" class="form-control" placeholder="123" required>
          </div>
        </div>
        <br>
        <div class="form-row">
          <div class="col-6">
            <label for="card_doctype">Tipo DOC</label>
            <select id="docType" data-checkout="docType" v-model="docType" class="form-control" required>
              <option value="DNI" selected>DNI</option>
              <option value="RUC">RUC</option>
            </select>
          </div>
          <div class="col-6">
            <label for="card_docnumber">Número DOC</label>
            <input id="docNumber" data-checkout="docNumber" v-model="docNumber" type="text" class="form-control" placeholder="Numero de Documento" required>
          </div>
        </div>
        <br>
        <div class="form-row">
          <div class="col">
            <label for="email">E-mail</label>
            <input id="email" type="text" v-model="email" class="form-control" placeholder="nombre@ejemplo.com">
          </div>
        </div>
      </div>
      <div class="modal-footer">  
        <button type="submit" class="btn btn-lg btn-block btn-warning" :disabled="loading">
          Pagar
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import $ from "jquery";
import axios from 'axios';
var token = null;
if (process.env.NODE_ENV === 'production') {
  token = process.env.VUE_APP_PUBLIC_TOKEN;
} else {
  token = process.env.VUE_APP_TEST_PUBLIC_TOKEN;
}

export default {
  props: {
    transactionAmount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    installments: {
      type: Number,
      default: 1,
    }
  },
  mounted() {
    this.loadMercadoPago();
    console.log(this.token);
  },
  data() {
    return {
      loading: null,
      token: token,
      transaction_amount: null,
      payment_method_id: null,
      email: null,
      docType: 'DNI',
      docNumber: null,
      cardholderName: null,
      years: [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
      ],
      months: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ]
    }
  },
  methods: {
    submit() {
      $('#checkoutModal').modal({
        keyboard: false,
        backdrop: false,
      });
      this.loading = 1;
      let $form = document.querySelector('#pay');
      Mercadopago.createToken($form, this.sdkResponseHandler.bind(this));
    },
    loadMercadoPago() {
      Mercadopago.getIdentificationTypes();
      Mercadopago.setPublishableKey(this.token);
    },
    guessPaymentMethod() {
      let cardnumber = document.getElementById("cardNumber").value;
      if (cardnumber.length >= 6) {
        let bin = cardnumber.substring(0,6);
        Mercadopago.getPaymentMethod({ "bin": bin }, this.setPaymentMethod.bind(this));
      }
    },
    setPaymentMethod(status, response) {
      if (status == 200) {
        let paymentMethodId = response[0].id;
        this.payment_method_id = paymentMethodId;
      } else {
        alert(`payment method info error: ${response}`);
      }
    }, 
    getInstallments() {
      Mercadopago.getInstallments({
        payment_method_id: this.payment_method_id,
        amount: 1,
      }, function (status, response) {
        if (status == 200) {
          document.getElementById('installments').options.length = 0;
          response[0].payer_costs.forEach(installment => {
            let opt = document.createElement('option');
            opt.text = installment.recommended_message;
            opt.value = installment.installments;
            document.getElementById('installments').appendChild(opt);
          });
        } else {
          alert(`installments method info error: ${response}`);
        }
      });
    },
    sdkResponseHandler(status, response) {
      console.log(status)
      console.log(response)
      if (status != 200 && status != 201) {
        let msg = "";
        for (let data in response.cause) {
          msg += response.cause[data].code + "-" + response.cause[data].description;
        }
        alert(msg);
      } else {
        axios.post('/checkout', {
          paymentMethodId: this.paymentMethodId,
          transactionAmount: this.transactionAmount,
          installments: this.installments,
          email: this.email,
          cardholderName: this.cardholderName,
          docType: this.docType,
          docNumber: this.docNumber,
          description: this.description,
          token: response.id,
        }).then(res => {
          console.log(res);
          this.loading = 2;
          $('#checkoutModal').modal({
            keyboard: true,
            backdrop: true,
          });
          setTimeout(() => { 
            this.loading = null; 
            $('#checkoutModal').modal('hide');
          }, 3000);
          this.$emit('confirm', res.data);
        }).catch(error => {
          this.loading = false;
          $('#checkoutModal').modal({
            keyboard: true,
            backdrop: true,
          });
          this.loading = 3;
          setTimeout(() => this.loading = null, 3000);
          this.$emit('error', error.response);
          console.log(error.response);
        });
      }
    }
  }
}
</script>

<style>
.loading-text {
  z-index: 2;
  height: calc(100% - 2rem);
  width: calc(100% - 2rem);
  position: absolute;
}

.loading {
  z-index: 1;
  background: white;
  height: calc(100% - 2rem);
  width: calc(100% - 2rem);
  position: absolute;
}

.creditCardForm {
    max-width: 700px;
    background-color: #fff;
    margin: 100px auto;
    overflow: hidden;
    padding: 25px;
    color: #4c4e56;
}
.creditCardForm label {
    width: 100%;
    margin-bottom: 10px;
}
.creditCardForm .heading h1 {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    color: #4c4e56;
}
.creditCardForm .payment {
    float: left;
    font-size: 18px;
    padding: 10px 25px;
    margin-top: 20px;
    position: relative;
}
.creditCardForm .payment .form-group {
    float: left;
    margin-bottom: 15px;
}
.creditCardForm .payment .form-control {
    line-height: 40px;
    height: auto;
    padding: 0 16px;
}
.creditCardForm .owner {
    width: 63%;
    margin-right: 10px;
}
.creditCardForm .CVV {
    width: 35%;
}
.creditCardForm #card-number-field {
    width: 100%;
}
.creditCardForm #expiration-date {
    width: 49%;
}
.creditCardForm #credit_cards {
    width: 50%;
    margin-top: 25px;
    text-align: right;
}
.creditCardForm #pay-now {
    width: 100%;
    margin-top: 25px;
}
.creditCardForm .payment .btn {
    width: 100%;
    margin-top: 3px;
    font-size: 24px;
    background-color: #2ec4a5;
    color: white;
}
.creditCardForm .payment select {
    padding: 10px;
    margin-right: 15px;
}
.transparent {
    opacity: 0.2;
}
@media(max-width: 650px) {
    .creditCardForm .owner,
    .creditCardForm .CVV,
    .creditCardForm #expiration-date,
    .creditCardForm #credit_cards {
        width: 100%;
    }
    .creditCardForm #credit_cards {
        text-align: left;
    }
}
</style>