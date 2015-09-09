/*
 *Tecnologico de Costa Rica
 *Administracion de proyectos
 *Carlos Fernandez Jimenez
 *Backend for TuristShareApp
*/
//import dependences
var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;
//message schema 
var mensaje = new Schema({
    username:{ 
        type: String,
        required: true
    },
    emisor:{ 
        type: String,
        required: true
    },
    comment:{ 
        type: String,
        required: true,
        unique: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Mensaje', mensaje);