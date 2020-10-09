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

//calendar
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
    url: 'http://localhost:4002/api/trips/',
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

//pictures
app.get('/api/pictures/:hotel', (req, res) => {
  let hotel = req.params.hotel;
  axios({
    url: `http://localhost:4000/api/pictures/${hotel}`,
    method: 'GET'
  })
  .then(result => {
    res.send(result.data);
  })
  .catch(err => {
    console.log(err);
  });
});

//About
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

//Reviews

app.get('/hotel/:hotel', (req, res) => {
  let hotel = req.params.hotel;
  axios({
    url: `http://localhost:4003/hotel/${hotel}`,
    method: 'GET'
  })
  .then(result => {
    res.send(result.data);
  })
  .catch(err => {
    console.log(err);
  });
});

//Redirecting
app.get('/*', (req, res) => {
  let fileName = 'index.html'
  const options = {
    root: __dirname + '/../dist'
  }
  res.sendFile(fileName, options, function(err){
    if(err) {
      console.log('error', err);
    } else {
      console.log('file sent', fileName);
    }
  });
})
