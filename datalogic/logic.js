/*
 *Tecnologico de Costa Rica
 *Administracion de proyectos
 *Carlos Fernandez Jimenez
 *Backend for TuristShareApp
*/
//import dependences
var dataAccess = require('../dataAccess/mongoConnection.js');

//create user controller
exports.createUser = function(req, res){
    dataAccess.createUser({
        name:req.body.name,
        lastName:req.body.lastName,
        username:req.body.username,
        phoneNumber:req.body.phoneNumber,
        facebookId:req.body.facebookId,
        email:req.body.email,
        userType:req.body.userType
    }, function(success, data, code){
        if(success){
			res.json(data);
		} 
		else{
			res.status(code);
			res.send(data);
		}
    });
};

//login controller
exports.login = function(req, res){
    console.log("entro "+req.body);
   
    dataAccess.login({
        facebookId:req.body.facebookId
    }, function(success, data, code){
        if(success){
            console.log(data);
			res.json(data);
		//	res.send(JSON.stringify(data));
		} 
		else{
			res.status(code);
			res.send(data);
		}
    });
};

//create ad controller
exports.createAd = function(req, res){
    dataAccess.newAd({
        username:req.body.username,
        tipoAlojamiento:req.body.tipoAlojamiento,
  		tipoHabitacion:req.body.tipoHabitacion,
  		capacidad:req.body.capacidad,
  		idioma:req.body.idioma,
  		precioNoche:req.body.precioNoche,
  		precioDia:req.body.precioDia,
  		imagen:req.body.imagen,
  		ciudad:req.body.ciudad,
  		localizacion:{
		    latitud:req.body.localizacion.lat,
		    longitud:req.body.localizacion.long
	    }
    }
    , function(success, data, code){
        if(success){
			res.json(data);
		} 
		else{
			res.status(code);
			res.send(data);
		}
    });
};
//get ads controller

//users.find({"name": /.*m.*/})
//create message controller
exports.createMessage = function(req, res){
    dataAccess.createMessage({
        username:req.body.username,
        emisor:req.body.emisor,
        comment:req.body.comment,
        createdAt:req.body.createdAt
    }, function(success, data, code){
        if(success){
			res.json(data);
		} 
		else{
			res.status(code);
			res.send(data);
		}
    });
};

//get messages controller
exports.listMessage = function(req, res){
    dataAccess.listMessage({
        username:req.query.username
    }, function(success, data, code){
        if(success){
			res.json(data);
		} 
		else{
			res.status(code);
			res.send(data);
		}
    });
};



