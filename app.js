var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var port = process.env.PORT || 4002;
var https = require('https');
var http = require('http');

app.use(express.static(__dirname + '/app'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Location, Authorization');
    res.setHeader('Access-Control-Expose-Headers', 'Location');
    next();
});

// CAMPEOES

const API_KEY = 'RGAPI-f4468757-2734-4c43-8fb1-9a3b43cecc37';

var options = {
	host: 'br1.api.riotgames.com',
	path: '/lol/platform/v3/champions',
	port: 443,
	headers: {
		'Content-Type': 'application/json',

	}
};


app.get('/api/v1/campeoes', function(req, res) {
	var request = https.request(options, function(response)
	{
			var output = '';
			console.log(options.host + ':' + response.statusCode);
			response.setEncoding('utf8');

			response.on('data', function (chunk) {
					output += chunk;
			});

			response.on('end', function() {
					var obj = JSON.parse(output);
					res.json((response.statusCode, obj));
			});
	});

	request.on('error', function(err) {
			//res.send('error: ' + err.message);
	});

	requesst.end();
});


app.listen(port);
