var http = require('http');

function request_account(info, options) {
        var req = http.request(options, function (res) {  
            console.log('STATUS: ' + res.statusCode);  
            console.log('HEADERS: ' + JSON.stringify(res.headers));  
            res.setEncoding('utf8');  
            res.on('data', function (chunk) {  
            console.log('BODY: ' + chunk);
            info = chunk;
            });  
        });
            
        req.on('error', function (e) {  
        console.log('problem with request: ' + e.message);  
        });  
            
        req.end();
}

exports.get_account = function() {
    var options = {  
        hostname: '192.168.217.128',  
        port: 12345,  
        path: '/account',  
        method: 'GET'  
    };
    var info = {};
    while (true){
        console.log("get");
        request_account(info, options);
        console.log('info-before:' + info.admin);
        if (info.admin){
            console.log('info: ' + info);
           return info; 
        }
        break;
    }
};


exports.release_account = function(){
    console.log("hello world");
};

