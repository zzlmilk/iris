var csv = require('csv-parser')
var fs = require('fs')
var _ = require('lodash');


var UserModel = require('../server/Models/User');

var DatabaseManager = require('../server/lib/DatabaseManager');
var Conf = require('../server/lib/init');



DatabaseManager.init(Conf,function(success){

    if(!success){

        console.log('Failed to connect DB');
        process.exit(1);

    } else {

      var le =[];

      memberextCSV()

      return;
        memberCSV(function(data){ 
          le.push(data.memberId)
          console.log(data)

            var userModel = UserModel.get();   
            var user = new userModel({
                  guid:data.id,
                  mobile:data.mobile,
                  isAccountEnabled:data.isAccountEnabled,
                  point:data.point,
                  isAccountEnabled:data.isAccountEnabled,
                  point:data.point,
                  loginPassword:data.loginPassword,
                  created:data.createDate,
                  uselessInfo:{
                      username:data.username,
                      remark:data.remind,
                      jobflag:data.jobflag,
                      issystem:data.issystem,                      
                  }
            });

               user.save(function(err){
                      //console.log(err);
                      if (err) {
                         // console.log(err)
                      }

              })

             
            //var userModel = UserModel.get();    


        })

    }

});


//memberextCSV()

/*
                uselessInfo.username:data.username,
                  uselessInfo.remark:data.remind,
                  uselessInfo.jobflag:data.jobflag,
                  uselessInfo.issystem:data,
  id: 'ff98c1874f3841b2a8319a0f962f89c9',
  createDate: '2017-01-15 07:42:29 +0000',
  modifyDate: '2017-01-15 07:48:22 +0000',
  remark: '<null>',
  username: 'U20170115000009',
  mobile: '13917293208',
  loginPassword: '065E96A79942DB21EE693A5E96DFF3042C6D2A177958E2300D060D35',
  isAccountEnabled: '1',
  point: '381',
  totalPoint: '381',
  remind: '1',
  jobflag: 'PHONE_BINDMEMBER_NICENAME_ADDMEMBER_SEX_ADDPHOTO_UPPET_NICE_NAME_ADDPET_SEX_ADDPET_BIRTHDAY_ADDPET_BREED_ADDPET_HOME_DATE_ADDPET_FIRST_WEIGHT_EDITPET_MONTH_WEIGHT_EDIT_2017_01MEMBER_CITY_ADDMEMBER_BIRTHDAY_ADDPET_WALK_EVERYDAY_2017_01_16PICTURES_SHARE_TO_FRIENDS_2017_01_16',
  issystem: '0' 



  ---------

   memberId: 'ff98c1874f3841b2a8319a0f962f89c9',
  createDate: '2017-01-15 07:42:29 +0000',
  modifyDate: '2017-01-15 07:48:22 +0000',
  remark: '<null>',
  nickname: '沈大米',
  imagePath: '{"IMG":["http://wx.qlogo.cn/mmopen/qzC1ic9trEH4RKI3YXMEtvfSQJVfpmDsiaNSRYo81eCx0W0NJCtYWD2tjNvEx5LPPV6zq9r4KTBOJDveA8MK3KhTFXqLB58m0e/0"]}',
  sex: '2',
  birthday: '1981-03-18 04:00:00 +0000',
  city: '上海市',
  address: '<null>' 
*/






//let guid = guidGenerator()



function guidGenerator() {
    var S4 = function() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
}




 
function memberCSV(callBack){
fs.createReadStream('/Users/zhouzhiling/Documents/code/db_hakit_mysql_csv/member0623.csv')
  .pipe(csv())
  .on('data', function (data) {
   		// console.log(data)
      callBack(data);
  })
}





function memberextCSV(){

fs.createReadStream('/Users/zhouzhiling/Documents/code/db_hakit_mysql_csv/memberext0623.csv')
  .pipe(csv())
  .on('data', function (data) {
     // userModel
     //console.log(data)
     let img = null;

    if (data.imagePath == "<null>") {
         data.imagePath = null;
    }else{
          img = JSON.parse(data.imagePath);
           img = img.IMG[0];
           //console.log(img)
      }


      if (data.birthday=="<null>") {
          data.birthday="";
      }



      if (data.sex == "<null>") {
        data.sex  =null;
      }

      
    
      //console.log(data.address)
     // return;
    
    var userModel = UserModel.get();   
     userModel.findOne({guid:data.memberId},function(err,user){
            user.nickname  = data.nickname;
            user.profile_image_url = img;
            user.uselessInfo.imagePath=data.imagePath;                                   
            user.sex = data.sex;
            user.birthday = data.birthday;
            user.city = data.city;
            user.address = data.address;

            user.save(function(err){
              console.log(err)
            })
     });




  })
}




  //memberext0623



