var express = require('express');
var router = express.Router();

var bodyParser = require("body-parser");
var _ = require('lodash');
var Conf = require('../lib/init.js');


var WebAPIMain = {

	init:function(app){
		var self = this;

		app.use('/',express.static(__dirname + '/../../../public'));
		app.use(bodyParser.json());
		


		router.use("/test", require('./TestHandler'));

		app.use(Conf.urlPrefix + "/v1", router);
		

	},


}


module["exports"] = WebAPIMain;