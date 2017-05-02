/*
 *Tecnológico de Costa Rica
 *Project management course
 *Carlos Fernandez Jimenez
 *Tourist web page
 *User mongoose shemas
*/

'use strict'

//import dependences
var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;


//user schema 
var user = new Schema({
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
    password:{
        type: String,
        required: true,
    },
    phoneNumber:{ 
        type: String,
        required: true
    },
    facebookId:{ 
        type: String,
        required: true,
        unique: true
    },
    email:{ 
        type: String,
        required: true,
        lowercase: true
    },
    userType:{
        type: Number,
        required: true,
        enum: [0, 1, 2,]//0 =anfitrion, 1= huesped 2 = admin
    },
    signupDate: { 
        type: Date, 
        default: Date.now() 
    }
});


module.exports = mongoose.model('User', user);