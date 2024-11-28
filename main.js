const express = require('express');
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');
const https = require('https');
const axios = require('axios');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({  extended: true }));

app.get('/', function (req, res) {
   //fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
   //   res.end( data );
   //});
   
   res.end(`{"data": "test"}`);
});

const agent = new https.Agent({  
  rejectUnauthorized: false
});

app.get('/meeting/list', function (req, res) {
	axios.get(
		'http://localhost/meeting-presence/api/meeting/members/M2411170001', 
		{ 
			httpsAgent: agent
		}
	)
	.then(response => {
		// console.log(response.data);

		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify(response.data));
	})
	.catch(error => {
		console.error('Error fetching data', error);
	});
});

app.post('/meeting/members/:meeting_id', function (req, res) {
	console.log(req.params);
	console.log('process.env.HOST_BACKEND', process.env.HOST_BACKEND);
	axios.get(
		`https://10.254.42.59/meeting-presence/api/meeting/members/${req.params.meeting_id}`, 
		{ 
			httpsAgent: agent
		}
	)
	.then(response => {
		// console.log(response.data);

		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify(response.data));
	})
	.catch(error => {
		console.error('Error fetching data', error);
	});
});

var server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
});