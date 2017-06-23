window.$ = window.jQuery = require('jquery');

var _ = require('lodash');
var bootstrap = require('bootstrap-sass');


var Backbone = require('backbone');
var Utils = require('./lib/utils');


//var Routing = require('./routing');




var AppRouter = Backbone.Router.extend({
    routes: {
        "start": "startRoute",
	    "main": "mainRoute",
        "test":"testRoute",
	    "*actions": "defaultRoute"

    }
});




var app_router = new AppRouter;

app_router.on('route:defaultRoute', function(actions) {

	Utils.goPage("start")

});

app_router.on('route:startRoute', function(actions) {

	   var StartView = require('./Views/Start/StartView.js');   
       var view = new StartView();

});

app_router.on('route:testRoute', function(actions) {

       var TestView = require('./Views/test/TestView.js');   
       var view = new TestView();

});



 $(function() {

    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();

}); 


//window.$ = window.jQuery = require('jQuery');


// disable ajax cache for old browsers
