var CONST = require('../consts');
var APIClientBase = require('./APIClientBase');
var _ = require('lodash');


 var TestClient = function(){};


 _.extend(TestClient.prototype,APIClientBase.prototype);



   TestClient.prototype.send = function (data,success,err){
        
       
        this.getRequst ("/test",data,success,err);
        
    }



   module["exports"] = new TestClient();
