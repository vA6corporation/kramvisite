var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Account = new Schema({
  nombre: String,
  cuenta: String,
  cuentaInterbancaria: { type: String, default: null },
});

var Parthner = new Schema({
  nombre: { type: String, required: true },
  celular: { type: String, required: true },
  descripcion: { type: String, default: 'Partner Kramvi' },
  cuentas: [Account],
}, {
  collection: 'parthners', 
  timestamps: { createdAt: 'creado', updatedAt: 'actualizado' }
});

var ParthnerModel = mongoose.model('ParthnerModel', Parthner);

Parthner.virtual('empresas', {
  ref: 'Business',   // the model to use
  localField: '_id',  // find children where 'localField'
  foreignField: 'parthner', // is equal to foreignField
  justOne: false //if return an Object or an Array
});

Parthner.pre('save', next => {
  ParthnerModel.findOne({ nombre: this.nombre }).then(empresa => {
    if (empresa && !empresa._id.equals(this._id)) {
      next(new Error(`Hay un parthner con el mismo nombre: ${this.nombre}`));
    } else {
      next();
    }
  });
});

Parthner.set('toObject', { virtuals: true });
Parthner.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Parthner', Parthner);
