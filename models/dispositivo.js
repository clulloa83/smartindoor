const Sistema = require('./sistema');
const Usuario = require('./usuario');
/**
 * representa usuario de sistema en registro logs. Se utiliza id de usuario de sistema
 */
class Dispositivo {

    constructor(){
        this.id = '';
        this.sistema = new Sistema();
        this.usuario = new Usuario();
        this.nombre = '';
        this.ubicacion = '';
        this.icon = '';
        this.categoria = '';
        this.tipo = [];
        this.estado = '';
    }
    
}

module.exports = Dispositivo;