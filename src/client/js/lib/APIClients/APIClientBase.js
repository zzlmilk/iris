
var Conf = require('../init');
var _ = require('lodash');

(function(global) {
    "use strict;"
var APIClientBase = function(){}


 APIClientBase.prototype.getRequst = function(urlPrefix,data,success,error){

 			 var headers = {};

 			  
 			  $.ajax({
 			  		 type: 'GET',
 			  		  url: Conf.APIEndpoint + urlPrefix,
 			  		  dataType: 'json',
 			  		  headers: headers,
 			  		  success: function(response) {
 			  		  	

						
 			  		  	 if(_.isFunction(success)){
 			  		  	 		//console.log(response.data)
                 		  		success(response.data);
              				}

 			  		  },
 			  		  error: function(err) {
 			  		  		console.log(err)

 			  		   }


 			  });

};


  // returns instance
  module["exports"] = APIClientBase;

  })((this || 0).self || global);

