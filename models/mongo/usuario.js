const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    // cuenta: {
    //     type: String,
    //     required: [true, 'la cuenta es obligatorio']
    // },
    contraseña: {
        type: String,
        required: [true, 'la contraseña es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'el correo es obligatorio'],
        unique: true
    },
    nombres: {
        type: String,
        required: [true, 'el nombres es obligatorio']
    },
    apellidos: {
        type: String,
        required: [true, 'el apellidos es obligatorio']
    },
    token: {
        type: String,
        required: [true, 'el token es obligatorio']
    },
    perfil: {
        type: Schema.Types.ObjectId,
        ref: 'Perfil',
        required: [true, 'el Perfil es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Usuario', UsuarioSchema);