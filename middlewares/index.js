const validarCampos = require('./validar-campos');
const validarJWT = require('./validar-jwt');
// const subirArchivos = require('./subir-archivos');

module.exports = {
    ...validarCampos,
    ...validarJWT,
    // ...subirArchivos,
}