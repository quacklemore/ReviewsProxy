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

app.get('/api/low-days/0', (req, res) => {
  axios({
    url: 'http://localhost:4002/api/low-days/0',
    method: 'GET'
  })
  .then(result => {
    res.send(result.data);
  })
  .catch(err => {
    console.log(err);
  });
});

app.post('/api/pictures/', (req, res) => {
  console.log('api/pictures');
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