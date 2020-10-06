const express = require('express');
const axios = require('axios');
let app = express();
const port = 4004;

app.use(express.static(__dirname + '/../dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port, function() {
  console.log(`listening on port: ${port}`);
});

app.get('/api/low-days/:id', (req, res) => {
  let lowId = req.params.id;
  axios({
    url: `http://localhost:4002/api/low-days/${lowId}`,
    method: 'GET'
  })
  .then(result => {
    res.send(result.data);
  })
  .catch(err => {
    console.log(err);
  });
});

app.get('/api/trips/:id', (req, res) => {
  let tripId = req.params.id;
  axios({
    url: `http://localhost:4002/api/low-days/${tripId}`,
    method: 'GET'
  })
  .then(result => {
    res.send(result.data);
  })
  .catch(err => {
    console.log(err);
  });
});

app.post('/api/trips/', (req, res) => {
  axios({
    url: 'http://localhost:4000/api/trips/',
    method: 'POST',
    data: {
      "trip": req.body.trip
    }
  })
  .then(result => {
    res.send(result.data);
  })
  .catch(err => {
    console.log(err);
  });
});

app.post('/api/pictures/', (req, res) => {
  axios({
    url: 'http://localhost:4000/api/pictures/',
    method: 'POST',
    data: {
      "hotel": req.body.hotel
    }
  })
  .then(result => {
    res.send(result.data);
  })
  .catch(err => {
    console.log(err);
  });
});

app.get('/api/hotel/:hotelId', (req, res) => {
  let hotelId = req.params.hotelId;
  axios({
    url: `http://localhost:4001/api/hotel/${hotelId}`,
    method: 'GET'
  })
  .then(result => {
    res.send(result.data);
  })
  .catch(err => {
    console.log(err);
  });
});

app.get('/reviews', (req, res) => {
  axios({
    url: 'http://localhost:4003/reviews',
    method: 'GET'
  })
  .then(result => {
    res.send(result.data);
  })
  .catch(err => {
    console.log(err);
  });
});