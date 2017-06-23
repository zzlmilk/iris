var _ = require('lodash');
var mongoose = require('mongoose');

var Config = require("../lib/init");

var DatabaseManager = require('../lib/DatabaseManager');


var UserModel  = function(){};


UserModel.prototype.init = function(mongoose){
	 this.schema = new mongoose.Schema({
	 	guid :{type:String, index:true},
	 	mobile:{type:String,index:true,unique: true},
	 	loginPassword:String,
	 	nickname:String,
	 	city:String,
	 	profile_image_url:String,
	 	sex:Number,
	 	birthday:Date,
	 	address:String,
	 	point:Number,	 	
	 	isAccountEnabled:Number,
	 	updated:Date,
	 	created:Date, //注册时间
	 	totalPoint:Number,
	 	uselessInfo:{
	 		username:String,
	 		remark:String,
	 		remind:Number,
	 		jobflag:String,
	 		issystem:Number,
	 		imagePath:String,
	 	}		 
	 });

 	this.model = mongoose.model(Config.dbCollectionPrefix + "users", this.schema);
};

UserModel.get = function(){
    return DatabaseManager.getModel('User').model;    
}


module["exports"] = UserModel;
