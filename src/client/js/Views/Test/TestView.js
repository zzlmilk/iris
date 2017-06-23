var Backbone = require('backbone');
var _ = require('lodash');

var Utils = require('../../lib/utils');
var Const = require('../../lib/consts');
var Config = require('../../lib/init');


var TestClient = require('../../lib/APIClients/TestClient');
var User = require('../../Models/user')


// load template
var template = require('./Test.hbs');


var TestView = Backbone.View.extend({

    user:null,
    users:null,

    initialize: function(options) {
        this.render();
    },
    
    render: function() {	

      
        
            this.onLoad();

        return this;

    },

    onLoad: function(){

        var self = this;     
       
        TestClient.send({
                
        },function(data){
           // console.log(data.users[0])

            this.users = User.collectionByResult(data.users)
            let users = this.users.toJSON()
            
              $(Config.defaultContaier).html(template({
                    userlist : users
              }));
             // $(self.parentElement).html(template({list:self.conversations.toJSON()}));

        },function(err){

        });

    }

});

module.exports = TestView;
