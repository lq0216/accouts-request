/*var http = require('http');
  
var options = {  
    hostname: '192.168.217.128',  
    port: 12345,  
    path: '/account',  
    method: 'GET'  
};  
            
var req = http.request(options, function (res) {  
    console.log('STATUS: ' + res.statusCode);  
    console.log('HEADERS: ' + JSON.stringify(res.headers));  
    res.setEncoding('utf8');  
    res.on('data', function (chunk) {  
    console.log('BODY: ' + chunk);  
    });  
});  
            
req.on('error', function (e) {  
    console.log('problem with request: ' + e.message);  
});  
            
req.end(); */

var ac = require('./request-acc.com');

ac.get_account();

