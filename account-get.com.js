var request = require('request');

var get = function () {
    url = "http://192.168.217.128:12345/account";
    return new Promise(function (resolve, reject) {
    request({url: url, json: true}, function (error, response, body) {
                    if (error) return reject(error);

                    resolve(body);
                 });
    });
};

var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('ok');
                }, time);
            });
    };




var get_account = async function(){
    var time = 10;
    var result = {};
    while (time > 0){
        let result = await get();
        if ("admin" in result){
            break;
        }
        time--;
        await sleep(3000); 
        console.log(result);
    }

}

get_account();
