
const Dispositivo = require('../models/mongo/dispositivo');

const dispositivosGet = async(params) => {

    let query = { estado: true, usuario: params.usuario.id };

    try {

        return await Dispositivo.find(query);

    } catch (error) {
        console.log('error dispositivosGet', error);
        throw new Error(error);
    }

};

const dispositivosPost = async(params) => {
    
    const data = { 
        sistema: params.dispositivo.sistema.id,
        usuario: params.dispositivo.usuario.id,
        nombre: params.dispositivo.nombre,
        ubicacion: params.dispositivo.ubicacion,
        icon: params.dispositivo.icon,
        categoria: params.dispositivo.categoria,
        tipo: params.dispositivo.tipo,
    };

    try {
        
        const dispositivo = new Dispositivo( data );
        return await dispositivo.save();

    } catch (error) {
        console.log('error dispositivosPost', error);
        throw new Error(error);
    }

};

const dispositivosDelete = async(params) => {
    
    const data = {
        id: params.dispositivo.id,
        estado: false
    };

    try {
        
        return await Dispositivo.findByIdAndUpdate(data);
        
    } catch (error) {
        console.log('error dispositivosDelete', error);
        throw new Error(error);
    }
};

module.exports = {
    dispositivosGet,
    dispositivosPost,
    dispositivosDelete
}