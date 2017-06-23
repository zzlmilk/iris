var express = require('express');
var http = require('http');

var DatabaseManager = require('./lib/DatabaseManager');


var Conf = require('./lib/init');


var app = express();
var server = http.createServer(app);
var port = 8080;

	

var WebAPI = require('./WebAPI/WebAPIMain');

	




DatabaseManager.init(Conf,function(success){

    if(!success){

        console.log('Failed to connect DB');
        process.exit(1);

    } else {
        
       
      WebAPI.init(app);       
     
    
    
    server.listen(Conf.port, function(){
          console.log('Server listening on port ' + Conf.port + '!');          

       });
            


    }

});



module.exports = app;



  // server.listen(port, function(){
  //           console.log('Server listening on port ' + port + '!');
  //     });


  

