
var Backbone = require('backbone');
var Utils = require('./lib/utils');


 var Routing = function(){


 	   // setting up router
 	   var AppRouter = Backbone.Router.extend({
 	   		"start": "start",
 	   		 "main": "mainRoute",
 	   		 "*actions": "defaultRoute"
 	   });

 	    // Initiate the router
        var appRouter = new AppRouter;

        appRouter.on('route:defaultRoute',function(actions){

        		  console.log("aaaa")
        		  Utils.goPage('startaa');
        });

         appRouter.on('route:start', function(actions) {
            
          alert("aaa")
                    
        });

         	
           appRouter.on('route:mainRoute', function(actions) {
        	
            alert("mainRoute")
            
        });



 }


 module["exports"] = new Routing();



