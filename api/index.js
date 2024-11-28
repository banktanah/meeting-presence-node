const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');
const axios = require('axios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const agent = new https.Agent({
  rejectUnauthorized: false,
});

// Root route
app.get('/', (req, res) => {
  res.json({ data: "test" });
});

// Meeting list route
app.get('/meeting/list', (req, res) => {
  axios
    .get('http://localhost/meeting-presence/api/meeting/members/M2411170001', { httpsAgent: agent })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data', error);
      res.status(500).send('Error fetching data');
    });
});

// Meeting members route
app.post('/meeting/members/:meeting_id', (req, res) => {
  const { meeting_id } = req.params;
  console.log('process.env.HOST_BACKEND', process.env.HOST_BACKEND);

  axios
    .get(`https://10.254.42.59/meeting-presence/api/meeting/members/${meeting_id}`, { httpsAgent: agent })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data', error);
      res.status(500).send('Error fetching data');
    });
});

module.exports = app;