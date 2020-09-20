
require('dotenv').config();
var express = require('express');
var app = express();
var path = require('path');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');

var Office = require('./models/Office');
var Business = require('./models/Business');
var Partner = require('./models/Partner');

var mercadopago = require('mercadopago');

if (process.env.NODE_ENV == 'production') {
  var uri = process.env.DB_HOST;
  mercadopago.configurations.setAccessToken(process.env.TOKEN);
} else {
  var uri = process.env.DB_HOST_LOCAL;
  mercadopago.configurations.setAccessToken(process.env.TEST_TOKEN);
}

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(uri, { 
  useNewUrlParser: true, useUnifiedTopology: true 
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/public'));

app.get('/businesses/:businessId', async (req, res) => {
  var businessId = req.params.businessId;
  var business = await Business.findOne({ _id: businessId }).populate(['oficinas']);
  // console.log(business);
  var partner = await Partner.findOne({ _id: business.partner });
  res.json({ business, partner });
});

app.post('/checkout', async (req, res) => {
  console.log(req.body);
  var payment_data = {
    payment_method_id: req.body.paymentMethodId,
    transaction_amount: Number(req.body.transactionAmount),
    description: req.body.description,
    installments: Number(req.body.installments),
    token: req.body.token,
    // issuer_id: req.body.issuer,
    payer: {
      email: req.body.email,
      first_name: req.body.cardholderName,
      identification: {
        type: req.body.docType,
        number: req.body.docNumber,
      }
    }
  };

  mercadopago.payment.save(payment_data).then(function(response) {
    res.status(response.status).json({
      status: response.body.status,
      status_detail: response.body.status_detail,
      id: response.body.id
    });
  }).catch(function(error) {
    console.log(error);
    res.status(400).json(error);
  });
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
  if (process.env.NODE_ENV) {
    console.log('Enviroment: production');
  } else {
    console.log('Enviroment: local');
  }
});
