var request = require('request');

exports.bind_post = function (body) {
    request({url: body.bind_url, json: true, method: "POST", body: body}, function (error, response, body) {
                    if (error) return reject(error);

                 });
};
