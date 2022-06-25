const { response, request } = require('express');
const { StatusCode } = require('status-code-enum');
const servicioLogin = require('../services/servicio-login');
const ParamsUsuario = require('../models/params/usuario-params');

const login = async(req = request, res = response) => {

    const { correo, contraseña } = req.body;
    
    let params = new ParamsUsuario();
    params.usuario.correo = correo;
    params.usuario.contraseña = contraseña;

    try {
        
        let result = await servicioLogin.login(params);

        if(result.valido){
            let usuario = result.usuario;
            res.status(StatusCode.SuccessOK).json({ usuario })
        }
        else{
            let mensaje = result.mensaje;
            res.status(StatusCode.ClientErrorBadRequest ).json({ mensaje })
        }

    } catch (error) {
        console.log('error login', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    }

};

module.exports = {
    login
}