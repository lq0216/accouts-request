var request = require('request');

var post = function (body) {
    url = "http://192.168.217.128:12345/account";
    request({url: url, json: true, method: "POST", body: body}, function (error, response, body) {
                    if (error) return reject(error);

                 });
};


var post_account = function(body){
    let result = post(body);
    console.log(result);

};

body = {"admin": "intl.e2etest.1@service.aliyun.com", "password": "zrjyLWqO1"};
post_account(body);
