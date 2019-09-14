const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
// const db = require('../database-sequelize/index');
const { Client } = require('pg');
const client = new Client();

const port = 3001;

const app = express();
client.connect(); 

app.use(morgan('tiny'));
app.use('/api/listings/:listing', express.static('public'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.listen(port);

app.get('/api/listings', (req, res) => {
  const id = req.params.listing;
  client.query(`SELECT * FROM listings WHERE listingId = ${id}`, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res);
    }
  });
  // db.Listing.findOne({
  //   where: {
  //     id: req.query.listing,
  //   },
  // })
  //   .then((listing) => {
  //     res.send(listing);
  //   });
});

app.get('/api/listings/id/booked-dates', (req, res) => {
  const id = req.params.listing;
  client.query('SELECT year, month, date FROM bookeddates', (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res);
    }
  });
  // db.BookedDate.findAll({
  //   attributes: ['year', 'month', 'date'],
  //   where: {
  //     listingId: req.query.listing,
  //   },
  // })
  //   .then((bookedDates) => {
  //     res.send(bookedDates);
  //   });
});

app.post('/api/listings/id/booked-dates', (req, res) => {
  const id = req.params.listing;
  const year = req.params.year;
  const month = req.params.month;
  const date = req.params.date;
  client.query(`INSERT INTO bookeddates(year, month, date) VALUES(${year}, ${month}, ${date})`, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res);
    }
  })
});

app.put('/api/listings', (req, res) => {
  const id = req.params.listing;
  client.query()
});

app.put('/api/listings/id/booked-dates', (req, res) => {
  const id = req.params.listing;
  client.query(`UPDATE bookeddates SET WHERE`, (req, res) => {
    if (err) {
      console.log(err.stack); 
    } else {
      console.log(res);
    }
  })
});

app.delete('/api/listings/id/booked-dates', (req, res) => {
  const id = req.params.listing;
  const year = req.params.year;
  const month = req.params.month;
  const date = req.params.date;
  client.query(`DELETE FROM bookeddates WHERE year=${year}, month=${month}, date=${date}`, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res); 
    }
  })
});
