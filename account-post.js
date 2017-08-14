var request = require('request');

exports.account_post = function (body) {
	console.log("release account: " + body.admin)
	url = body.account_url
	delete body.account_url
    request({url: url, json: true, method: "POST", body: body}, function (error, response, body) {
                    if (error) return reject(error);

                 });
};
