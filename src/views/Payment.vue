<template lang='pug'>
.container
  checkout-modal(:transaction-amount='3' description='Suscripcion Kramvi' @confirm='successPayment' @error='errorPayment')
  .pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto
    h1.text-center Renovacion de Suscripcion
    .form-group
      .card
        .card-body.text-capitalize
          table.table.table-sm.table-borderless.mb-0
            tbody
              tr
                td Empresa: 
                td {{ business.razonSocial }}
              tr
                td RUC: 
                td {{ business.ruc }}
              tr
                td Sucursales: 
                td {{ business.oficinas.length }} Sucursales
              tr
                td Plan: 
                td {{ plan }}
              tr 
                th Monto a pagar:
                th S/ {{ (((price * quantityPro) - 1) - (discount * (quantityPro - 1))).toFixed(2) }}
              tr.border-top
                td
                td
              tr(v-for='item in  partner.cuentas')
                td {{ item.nombre }}:
                td N° cta.  {{ item.cuenta }}
    .form-group
      button.btn.btn-success.btn-lg.btn-block(type='button' data-toggle='modal' data-target='#checkoutModal')
        | Pagar con Tarjeta
        //- feather(type='credit-card' class='ml-2 icon-lg')
    p.lead.text-center
      | Todas las cuentas estan a nombre de:
      br
      span.text-uppercase {{ partner.nombre }}
      br
      | {{ partner.descripcion }}
    p.lead.text-center
      | Confirmado su deposito o transferencia, comuniquese al Celular o Whatsapp 
    p.lead.text-center
      feather.feather-md(type='phone') 
      |  {{ partner.celular }}
    p.lead.text-success.text-center Llame si tiene alguna consulta
    br
    .lead
      | Consulte nuestros precios:
  pricings
</template>

<script>
import Pricings from '@/components/Pricings'
import CheckoutModal from '@/components/CheckoutModal'

export default {
  components: {
    Pricings,
    CheckoutModal,
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      business: {
        oficinas: [],
      },
      partner: {
        cuentas: [],
      },
      discount: 10,
      quantityBasic: 1,
      quantityEcommerce: 1,
    }
  },
  methods: {
    fetchData() {
      var businessId = this.$route.params.businessId;
      this.$http.get(`/businesses/${businessId}`).then(res => {
        console.log(res);
        this.business = res.body.business;
        this.partner = res.body.partner;
      });
    },
    errorPayment(error) {
      console.log(error);
      // this.$snotify.error('No pudimos procesar el pago');
    },
    successPayment(res) {
      console.log(res);
      // this.$snotify.success('Pago realizado corretament');
    },
  },
  computed: {
    quantityPro() {
      return this.business.oficinas.length;
    },
    price() {
      if (this.business.certificado) {
        return 80;
      } else {
        return 50;
      }
    },
    plan() {
      if (this.business.certificado) {
        return 'ESTANDAR';
      } else {
        return 'BASICO';
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 969px;
}
</style>