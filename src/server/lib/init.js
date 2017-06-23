(function(global) {
    "use strict;"

    // Class ------------------------------------------------
    var Config = {};
    
    Config.host = "127.0.0.1";
    Config.port = 8080;
    Config.urlPrefix = '/iror';

    Config.databaseUrl = "mongodb://localhost/iror_test";
    Config.dbCollectionPrefix = "";


    // Config.imageDownloadURL = "http://" + Config.host + "/:" + Config.port + Config.urlPrefix + "/media/images/";
    // Config.noavatarImg = "http://" + Config.host + ":" + Config.port + Config.urlPrefix + "/img/noavatar.png";

    
    // Config.uploadDir = 'public/uploads/';
    

    //大于短信
    Config.dayu = {
              appkey:'23423279',
              appsecret:'0ebe8587cee57cf5dd11776e92eba77b',
              REST_URL:'http://gw.api.taobao.com/router/rest',
              sms_free_sign_name:"派慕科技",
              sms_type:"normal",
              sms_template_code:"SMS_25235023",
    }

        



    //高德信息
    
    // Exports ----------------------------------------------
    module["exports"] = Config;

})((this || 0).self || global);
