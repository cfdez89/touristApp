/*
 *Tecnologico de Costa Rica
 *Administracion de proyectos
 *Carlos Fernandez Jimenez
 *Backend for TuristShareApp
*/
//import dependences
var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;
//user schema 
var usuario = new Schema({
    name:{ 
        type: String,
        required: true
    },
    lastName:{ 
        type: String,
        required: true
    },
    username:{ 
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{ 
        type: Number,
        required: true
    },
    facebookId:{ 
        type: String,
        required: true,
        unique: true
    },
    email:{ 
        type: String,
        required: true
    },
    userType:{
        type: String,
        required: true,
        enum: ['anfitrion', 'huesped']
    }
});


module.exports = mongoose.model('Usuario', usuario);