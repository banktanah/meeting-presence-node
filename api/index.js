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

/**
 * master
 */
app.get('/master/room', (req, res) => {
  console.log('process.env.HOST_BACKEND', process.env.HOST_BACKEND);

  axios
    .get(`${process.env.HOST_BACKEND}/meeting-presence/api/master/room`, { httpsAgent: agent })
    .then((response) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data', error);
      res.status(500).send('Error fetching data');
    });
});

app.get('/master/meeting-type', (req, res) => {
  axios
    .get(`${process.env.HOST_BACKEND}/meeting-presence/api/master/meeting-type`, { httpsAgent: agent })
    .then((response) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data', error);
      res.status(500).send('Error fetching data');
    });
});

/**
 * meeting
 */
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
  // console.log('req.body', req.body);

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

app.post('/meeting/add', (req, res) => {
  // console.log('req.body', req.body);
  axios
    .post(
      `${process.env.HOST_BACKEND}/meeting-presence/api/meeting/add`,
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

app.post('/meeting/delete', (req, res) => {
  // console.log('req.body', req.body);
  axios
    .post(
      `${process.env.HOST_BACKEND}/meeting-presence/api/meeting/delete`,
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

app.post('/meeting/add-document', (req, res) => {
  // console.log('req.body', req.body);
  axios
    .post(
      `${process.env.HOST_BACKEND}/meeting-presence/api/meeting/add-document`,
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

app.post('/meeting/update', (req, res) => {
  // console.log('req.body', req.body);
  axios
    .post(
      `${process.env.HOST_BACKEND}/meeting-presence/api/meeting/update`,
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

/**
 * meeting-member
 */
app.get('/meeting-member/detail/:meeting_member_id', (req, res) => {
  axios
    .get(`${process.env.HOST_BACKEND}/meeting-presence/api/meeting-member/detail/${req.params.meeting_member_id}`, { httpsAgent: agent })
    .then((response) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data', error);
      res.status(500).send('Error fetching data');
    });
});

app.post('/meeting-member/add', (req, res) => {
  // console.log('req.body', req.body);
  axios
    .post(
      `${process.env.HOST_BACKEND}/meeting-presence/api/meeting-member/add`,
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

app.post('/meeting-member/delete', (req, res) => {
  // console.log('req.body', req.body);
  axios
    .post(
      `${process.env.HOST_BACKEND}/meeting-presence/api/meeting-member/delete`,
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

app.post('/meeting-member/update', (req, res) => {
  // console.log('req.body', req.body);
  axios
    .post(
      `${process.env.HOST_BACKEND}/meeting-presence/api/meeting-member/update`,
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

/**
 * dashboard
 */
app.get('/dashboard/listpegawai', (req, res) => {
  const { meeting_id } = req.params;

  axios
    .get(`${process.env.HOST_DASHBOARD}/dashboard/services/apps/mawas/listpegawai`, { httpsAgent: agent })
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