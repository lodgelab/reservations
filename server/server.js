require('newrelic');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
// const db = require('../database-sequelize/index');
const db = require('../database');

const app = express();
const port = 3001;


app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/listings/:listing', express.static('public'));
app.use(express.static('public'));


app.get('/api/listings', (req, res) => {
  const id = req.query.listing;
  db.queryMethod(`SELECT * FROM listings WHERE id = ${id}`, (err, response) => {
    if (err) {
      throw err;
    } else {
      response = response.rows[0];
      let dataObj = {
        id: response.id,
        maxGuests: response.maxguests,
        maxInfants: response.maxinfants,
        chargePerNight: response.chargepernight,
        cleaningFee: response.cleaningfee,
        serviceFee: response.servicefee,
        occupancyFee: response.occupancyfee,
        rating: response.rating,
        numberOfRatings: response.numberofratings,
      };
      res.send(dataObj);  
    }
  });
});

app.get('/api/bookeddates', (req, res) => {
  const id = req.query.listing;
  db.queryMethod(`SELECT year, month, date FROM bookeddates WHERE listingid = ${id}`, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data.rows);
    }
  });
});

app.post('/api/bookeddates', (req, res) => {
  const id = req.query.listing;
  db.queryMethod(`INSERT INTO bookeddates(listingId, year, month, date) VALUES(${id}, ${req.body.year}, ${req.body.month}, ${req.body.date})`, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.sendStatus(202);
    }
  });
});

app.put('/api/listings', (req, res) => {
  const id = req.query.listing;
  db.queryMethod(`UPDATE listings SET maxguests = ${req.body.maxGuests} WHERE id = ${req.body.id}`, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.sendStatus(200);
    }
  });
});


app.delete('/api/bookeddates', (req, res) => {
  const id = req.query.listing;
  db.queryMethod(`DELETE FROM bookeddates WHERE listingId = ${req.body.listingId}`, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.sendStatus(200);
    }
  });
});


app.listen(port, () => console.log(`Reservations app listening on port ${port}!`))