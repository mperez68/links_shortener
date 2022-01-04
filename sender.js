// Modified template given by Bitly API Reference: https://dev.bitly.com/api-reference

var request = require('request');
//import request from 'request';

var headers = {
    'Authorization': 'Bearer c6587bbba967a126151630b08a1dfe8b09a9fdbe',
    'Content-Type': 'application/json'
};

var dataString = '{ "long_url": "https://dev.bitly.com", "domain": "bit.ly", "group_guid": "Bm147SyNhAU" }';

var options = {
    url: 'https://api-ssl.bitly.com/v4/shorten',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
