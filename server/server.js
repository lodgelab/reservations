const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database-sequelize/index');
const database = require('../database/seed.js');

const port = 3001;

const app = express();

app.use(morgan('tiny'));
app.use('/api/listings/:listing', express.static('public'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.listen(port);

app.get('/api/listings', (req, res) => {
  db.Listing.findOne({
    where: {
      id: req.query.listing,
    },
  })
    .then((listing) => {
      res.send(listing);
    });
});

app.get('/api/listings/id/booked-dates', (req, res) => {
  db.BookedDate.findAll({
    attributes: ['year', 'month', 'date'],
    where: {
      listingId: req.query.listing,
    },
  })
    .then((bookedDates) => {
      res.send(bookedDates);
    });
});

app.post('/api/listings/id/booked-dates', (req, res) => {
  //query here
});

app.put('/api/listings', (req, res) => {
  
});

app.delete('/api/listings/id/booked-dates', (req, res) => {

});
