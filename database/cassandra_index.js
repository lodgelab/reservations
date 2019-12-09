const cassandra = require('cassandra-driver');
const Uuid = cassandra.types.Uuid;

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'reservations' });



async function example() {
  await client.connect();
  await client.execute(`CREATE KEYSPACE IF NOT EXISTS reservations
                        WITH replication = { 'class': 'SimpleStrategy', 'replication_factor': '1' }`);
                        await client.execute(`USE reservations`);
  await client.execute(`CREATE TABLE IF NOT EXISTS listings (
    listingId bigint PRIMARY KEY,
    maxGuests tinyint,
    maxInfants tinyint,
    chargePerNight smallint,
    cleaningFee tinyint,
    serviceFee tinyint,
    occupancyFee tinyint,
    rating tinyint,
    numberOfRatings smallint
  )`);
  await client.execute(`CREATE TABLE IF NOT EXISTS bookeddates (
  listingId bigint PRIMARY KEY,
  year smallint,
  month tinyint,
  date tinyint
  )`);
  

  const concurrencyLevel = 500;
  const promises = new Array(concurrencyLevel);
  
const info = {
  totalLength: 10000,
  counter: 0
}



const fetchBookedDates = function (bookedDates) {
  const query = 'SELECT * FROM bookeddates WHERE listingId = ?';
  client.execute(query, [bookedDates])
  .then((result) => console.log('Booked dates retrieved from database', result));
}

const insertListing = function (listingId, maxGuests, maxInfants, chargePerNight, cleaningFee, serviceFee, occupancyFee, rating, numberOfRatings) {
  const query = 'INSERT INTO listings (listingId, maxGuests, maxInfants, chargePerNight, cleaningFee, serviceFee, occupancyFee, rating, numberOfRatings) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  client.execute(query, [listingId, maxGuests, maxInfants, chargePerNight, cleaningFee, serviceFee, occupancyFee, rating, numberOfRatings], { prepare : true })
    .then((result) => console.log('Listings inserted into database'))
    .catch((err) => console.log(err)); 
}
const fetchListing = function (listingId) {
  const query = 'SELECT * FROM listings WHERE listingId = ?';
  client.execute(query, (err, result) => {
    assert.ifError(err);
    console.log('Listing retrieved from database', result);
  });
}

const insertBookedDates = function(listingId, year, month, date) {
  const query = 'INSERT INTO bookeddates (listingId, year, month, date) VALUES (?, ?, ?, ?)';
  client.execute(query, [listingId, year, month, date])
    .then((result) => console.log('Bookings inserted into database'))
    .catch((err) => console.log(err));
}




module.exports = {
  fetchListing,
  fetchBookedDates,
  insertListing,
  insertBookedDates,
}
