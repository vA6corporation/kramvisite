var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Office = new Schema({
  nombre: { type: String, lowercase: true, maxlength:50, default: 'casa matriz', required: true },
  direccion: { type: String, lowercase: true, default: 'direccion' },
  mesas: { type: Number, default: 30 },
  numeroSerie: { type: Number, default: 1 },
  active: { type: Boolean, default: true },
  message: { type: String },
  empresa: { type: Schema.Types.ObjectId, ref: 'Business', required: true },
}, {
  collection: 'oficinas', 
  timestamps: { createdAt: 'creado', updatedAt: 'actualizado' }
});

var OfficeModel = mongoose.model('OfficeModel', Office);

Office.pre('save', async function(next) {
  var office = await OfficeModel.findOne({ nombre: this.nombre, empresa: this.empresa });
  if (office && !office._id.equals(this._id)) {
    next(new Error(`Hay una sucursal con el mismo nombre: ${this.nombre}`));
  } else {
    if (!office) {
      var count = await OfficeModel.countDocuments({
        empresa: this.empresa,
      });
      this.numeroSerie = count + 1;
    }
    next();
  }
});

Office.virtual('serieEmision').get(function() {
  if (this.numeroSerie <  9) {
    return `00${this.numeroSerie}`
  } else if (this.numeroSerie < 99) {
    return `0${this.numeroSerie}`
  } else {
    return `${this.numeroSerie}`
  }
});

Office.set('toObject', { virtuals: true });
Office.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Office', Office);
