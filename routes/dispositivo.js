const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT } = require('../middlewares');
const { dispositivosPost, dispositivosGet, dispositivosDelete } = require('../controllers/dispositivo');

const router = Router();

router.post('/',[
    validarJWT,
    check('sistemaId', 'el sistemaId es obligatorio').not().isEmpty(),
    check('usuarioId', 'el usuarioId es obligatorio').not().isEmpty(),
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('icon', 'el nombre es obligatorio').not().isEmpty(),
    check('ubicacion', 'el ubicacion es obligatorio').not().isEmpty(),
    check('categoria', 'la categoria es obligatoria').not().isEmpty(),
    check('tipo', 'el tipo es obligatorio').not().isEmpty(),
    validarCampos
], dispositivosPost);

router.get('/',[
    validarJWT,
    check('usuario', 'el usuario es obligatorio').not().isEmpty(),
    // check('limite', 'el limite es obligatorio').not().isEmpty(),
    // check('desde', 'el desde es obligatorio').not().isEmpty(),
    validarCampos
], dispositivosGet);

router.delete('/',[
    validarJWT,
    check('id', 'el id es obligatorio').not().isEmpty(),
    validarCampos
], dispositivosDelete);

module.exports = router;