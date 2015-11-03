/*
 *Tecnologico de Costa Rica
 *Administracion de proyectos
 *Carlos Fernandez Jimenez
 *Frontend for TuristShareApp
*/
 
 /*
 *Setter about controller 
 */
 
(function(){
	'use strict';
	angular
		.module('myTouristShare')
	    .controller('aboutController', ['$scope','$location', function($scope, $location){
		
			$scope.viewRooms = function(){
				$location.path('/rooms').replace();
			};
			
		}]);	
})();