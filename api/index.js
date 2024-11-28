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

// Meeting
app.get('/meeting/list', (req, res) => {
  console.log('process.env.HOST_BACKEND', process.env.HOST_BACKEND);

  axios
    .get(`${process.env.HOST_BACKEND}/meeting-presence/api/meeting/list`, { httpsAgent: agent })
    .then((response) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data', error);
      res.status(500).send('Error fetching data');
    });
});

app.get('/meeting/get/:meeting_id_or_code', (req, res) => {
  const { meeting_id_or_code } = req.params;

  axios
    .get(`${process.env.HOST_BACKEND}/meeting-presence/api/meeting/get/${meeting_id_or_code}`, { httpsAgent: agent })
    .then((response) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data', error);
      res.status(500).send('Error fetching data');
    });
});

app.get('/meeting/members/:meeting_id', (req, res) => {
  const { meeting_id } = req.params;

  axios
    .get(`${process.env.HOST_BACKEND}/meeting-presence/api/meeting/members/${meeting_id}`, { httpsAgent: agent })
    .then((response) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data', error);
      res.status(500).send('Error fetching data');
    });
});

app.post('/meeting/presence', (req, res) => {
  console.log('req.body', req.body);

  axios
    .post(
      `${process.env.HOST_BACKEND}/meeting-presence/api/meeting/presence`,
      req.body,
      { 
        httpsAgent: agent,
        headers: { 'Content-Type': 'application/json' }
      }
    )
    .then((response) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data', error);
      res.status(500).send('Error fetching data');
    });
});

module.exports = app;