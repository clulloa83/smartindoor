const { response, request } = require('express');
const { StatusCode } = require('status-code-enum');
const servicioDispositivos = require('../services/servicio-dispositivos');
const ParamsDispositivos = require('../models/params/dispositivos-params');

/**
 * obtiene los dispositivos registados en bd
 * @param {*} req 
 * @param {*} res 
 */
const dispositivosGet = async(req = request, res = response) => {

    const { usuario } = req.query;

    const params = new ParamsDispositivos();
    params.usuario.id = usuario;

    try {

        const result = await servicioDispositivos.dispositivosGet(params);
        res.status(StatusCode.SuccessOK).json(result);
        
    } catch (error) {
        console.log('error dispositivosGet', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    };
}

/**
 * registra sistema en bd
 * @param {*} req 
 * @param {*} res 
 */
const dispositivosPost = async(req = request, res = response) => {
    
    const { sistemaId, usuarioId, nombre, icon, ubicacion, categoria, tipo } = req.body;

    const params = new ParamsDispositivos();
    params.dispositivo.sistema.id = sistemaId;
    params.dispositivo.usuario.id = usuarioId;
    params.dispositivo.nombre = nombre;
    params.dispositivo.icon = icon;
    params.dispositivo.ubicacion = ubicacion;

    params.dispositivo.categoria = categoria;
    params.dispositivo.tipo = tipo;

    try {
        
        const result = await servicioDispositivos.dispositivosPost(params);
        res.status(StatusCode.SuccessCreated).json(result);

    } catch (error) {
        console.log('error dispositivosPost', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    }
}

/**
 * eliminación logica de sistema
 * @param {*} req 
 * @param {*} res 
 */
const dispositivosDelete = async(req = request, res = response) => {
    const { id } = req.body;

    const params = new ParamsDispositivos();
    params.dispositivo.id = id;

    try {
        
        const result = await servicioDispositivos.dispositivosDelete(params);
        res.status(StatusCode.SuccessOK).json(result);

    } catch (error) {
        console.log('error dispositivosDelete', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    }
}

module.exports = {
    dispositivosGet,
    dispositivosPost,
    dispositivosDelete
}