/*
 *Tecnologico de Costa Rica
 *Administracion de proyectos
 *Carlos Fernandez Jimenez
 *Backend for TuristShareApp
*/
//import dependences
var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;
//ad schema
var add = new Schema({
	username:{
		type: String,
		required: true	
	},
	tipoAlojamiento:{ 
		type: String,
		required: true,
		enum: ['casa', 'apartamento']
	},
	tipoHabitacion:{ 
		type:String,
		required: true,
		enum: ['propiedad completa', 'habitacion privada', 'habitacion compartida']
	},
	capacidad:{ 
		type: Number, 
		required: true
	},
	idioma:{ 
		type: String,
		required: true
	},
	precioNoche:{ 
		type: Number,
	    required: true         
	},
	precioDia:{ 
		type: Number,
		required: true
	},
	imagen:{ 
		type: String,
		required: true
	},
	ciudad:{ 
		type: String, 
		required: true
	},
	localizacion:{
		latitud:{
			type: Number, 
	        required: true
		},
		longitud:{
			type: Number, 
			required: true
		}
	}
});

module.exports = mongoose.model('Add', add);