var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Empresa = new Schema({
  ruc: { type: String, required: true, maxlength: 11 },
  razonSocial: { type: String, lowercase: true, maxlength: 240, default: 'Razon Social' },
  nombreComercial: { type: String, lowercase: true, maxlength: 240, default: 'Nombre Comercial' },
  domicilioFiscal: { type: String, default: 'domicilio fiscal', lowercase: true },
  email: { type: String, default: '' },
  // Datos de emision
  codigoUbigeo: { type: String, default: '150101' },
  departamento: { type: String, default: 'lima' },
  provincia: { type: String, default: 'lima' },
  distrito: { type: String, default: 'lima' },
  codigoPais: { type: String, default: 'PE' },
  usuarioSol: { type: String, default: 'VA6CORPO' },
  claveSol: { type: String, default: 'vA6x5jy977' },
  // Clave Privada
  passwordFirma: { type: String, default: 'vA6x5jy977' },
  certificado: { type: Schema.Types.ObjectId, default: null },
  //Settings
  serieEmision: { type: String, default: '001' },
  logo: { type: Schema.Types.ObjectId },
  // Opciones
  celular: { type: String, default: '123456789' },
  fechaPago: { 
    type: Date, 
    default: function() { return (new Date()).setMonth((new Date()).getMonth() + 1) } 
  },
  usuario: { type: Schema.Types.ObjectId, ref: 'User' },
  grupo: { type: Schema.Types.ObjectId, ref: 'Group', default: null },
  timezone: { type: String, default: 'America/Lima' },
  partner: { type: Schema.Types.ObjectId, ref: 'Parthner' },
  // tipo: { type: String, enun: ['RESTAURANT', 'MINIMARKET', 'BOTICA', 'FERRETERIA'], default: 'MINIMARKET' },
}, {
  collection: 'empresas', 
  timestamps: { createdAt: 'creado', updatedAt: 'actualizado' }
});

var EmpresaModel = mongoose.model('EmpresaModel', Empresa);

Empresa.virtual('oficinas', {
  ref: 'Office',   // the model to use
  localField: '_id',  // find children where 'localField'
  foreignField: 'empresa', // is equal to foreignField
  justOne: false //if return an Object or an Array
});

Empresa.virtual('categorias', {
  ref: 'Category',   // the model to use
  localField: '_id',  // find children where 'localField'
  foreignField: 'empresa', // is equal to foreignField
  justOne: false //if return an Object or an Array
});

Empresa.virtual('modulos', {
  ref: 'Modules',   // the model to use
  localField: '_id',  // find children where 'localField'
  foreignField: 'empresa', // is equal to foreignField
  justOne: true //if return an Object or an Array
});

Empresa.virtual('ajustes', {
  ref: 'Setting',   // the model to use
  localField: '_id',  // find children where 'localField'
  foreignField: 'empresa', // is equal to foreignField
  justOne: true //if return an Object or an Array
});

Empresa.pre('save', next => {
  EmpresaModel.findOne({ ruc: this.ruc }).then(empresa => {
    if (empresa && !empresa._id.equals(this._id)) {
      next(new Error(`Hay una empresa con el mismo Nº de RUC: ${this.ruc}`));
    } else {
      next();
    }
  });
});

Empresa.set('toObject', { virtuals: true });
Empresa.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Business', Empresa);
