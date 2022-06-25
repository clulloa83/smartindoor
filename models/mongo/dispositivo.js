const { Schema, model } = require('mongoose');

const DispositivoSchema = Schema({
    sistema: {
        type: Schema.Types.ObjectId,
        ref: 'Sistema',
        required: [true, 'el Sistema es obligatorio']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'el Usuario es obligatorio']
    },
    nombre: {
        type: String,
        required: [true, 'la nombre es obligatorio']
    },
    ubicacion: {
        type: String
    },
    icon: {
        type: String
    },
    estado: {
        type: Boolean,
        default: true
    },
    categoria: {
        type: String,
        enum: ['sensor','modulo'],
    },
    tipo: [{
        type: String,
        enum: ['temperatura','humedad'],
    }]
});

DispositivoSchema.methods.toJSON = function() {
    const { __v, sistema, usuario, _id, ...resto } = this.toObject();

    const dispositivo = {
        id: _id,
        nombre: resto.nombre,
        ubicacion: resto.ubicacion,
        icon: resto.icon,
        estado: resto.estado,
        categoria: resto.categoria,
        tipo: resto.tipo
    };

    return dispositivo;
};

module.exports = model('Dispositivo', DispositivoSchema);