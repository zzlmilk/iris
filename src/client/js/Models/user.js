var Backbone = require('backbone');
var _ = require('lodash');


var UserModel = Backbone.Model.extend({

		defaults:{
				guid:"",
				mobile:"",
				nickname:"",
				sex:"",
				profile_image_url:"",
				birthday:""

		},


		 initialize: function(){
    
        }


});





	
    var UserCollection = Backbone.Collection.extend({
        model: UserModel
    });



    var user = {
        Model:UserModel,
        Collection:UserCollection,
    }

    user.modelByResult = function(obj){
    		var model = new UserModel({
    			guid:obj.guid,
    			mobile: obj.mobile,
         		profile_image_url: obj.profile_image_url,
         		nickname:obj.nickname,
         		sex:obj.sex,
         		city:obj.city,
         		birthday:obj.birthday

    		});

    		 return model;

     }

     user.collectionByResult = function(obj){
     	 if(!_.isArray(obj))
            return null;

        var aryForCollection = [];

         _.each(obj,function(row){
            aryForCollection.push(user.modelByResult(row));
             
        });

         return new UserCollection(aryForCollection);

     }




module["exports"] = user;