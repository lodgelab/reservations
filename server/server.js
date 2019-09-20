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


app.get('/api/listings/:listing', (req, res) => {
  const id = req.params.listing;
  db.queryMethod(`SELECT * FROM listings WHERE id = ${id}`, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data.rows);
    }
  });
});

app.get('/api/listings/booked-dates/:listing', (req, res) => {
  const id = req.params.listing;
  db.queryMethod(`SELECT year, month, date FROM bookeddates WHERE listingid = ${id}`, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data.rows);
    }
  });
});

app.post('/api/listings/booked-dates/:listing', (req, res) => {
  const id = req.params.listing;
  db.queryMethod(`INSERT INTO bookeddates(listingId, year, month, date) VALUES(${id}, ${req.body.year}, ${req.body.month}, ${req.body.date})`, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.sendStatus(202);
    }
  });
});

app.put('/api/listings/:listing', (req, res) => {
  const id = req.params.listing;
  db.queryMethod(`UPDATE listings SET maxguests = ${req.body.maxGuests} WHERE id = ${req.body.id}`, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.sendStatus(200);
    }
  });
});


app.delete('/api/listings/booked-dates/:listing', (req, res) => {
  const id = req.params.listing;
  db.queryMethod(`DELETE FROM bookeddates WHERE listingId = ${req.body.listingId}`, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.sendStatus(200);
    }
  });
});


app.listen(port, () => console.log(`Reservations app listening on port ${port}!`))