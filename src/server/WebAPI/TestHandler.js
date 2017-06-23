var express = require('express');
var router = express.Router();
var RequestHandlerBase = require('./RequestHandlerBase');
var Const = require("../lib/consts");
var _ = require('lodash');


var UserModel =  require("../Models/User");

var TestHandler = function(){
	    
}


_.extend(TestHandler.prototype,RequestHandlerBase.prototype);

TestHandler.prototype.attach = function(route){
	 var self = this;

	  route.get('/',function(request,response){
	  	var userModel = UserModel.get();
	  	userModel.find({"city":"上海市","sex":"2"},function(err,users){

	  	 self.successResponse(response,Const.responsecodeSucceed,{
                        users: users
                   });  
	  	})

	  

	  });



}




new TestHandler().attach(router);
module["exports"] = router;