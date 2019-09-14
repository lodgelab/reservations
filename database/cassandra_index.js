// const cassandra = require('cassandra-driver');
// const Uuid = cassandra.types.Uuid;

// const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'reservations' });



// async function example() {
//   await client.connect();
//   await client.execute(`CREATE KEYSPACE IF NOT EXISTS reservations
//                         WITH replication = { 'class': 'SimpleStrategy', 'replication_factor': '1' }`);
//                         await client.execute(`USE reservations`);
//   await client.execute(`CREATE TABLE IF NOT EXISTS listings (
//     listingId bigint PRIMARY KEY,
//     maxGuests tinyint,
//     maxInfants tinyint,
//     chargePerNight smallint,
//     cleaningFee tinyint,
//     serviceFee tinyint,
//     occupancyFee tinyint,
//     rating tinyint,
//     numberOfRatings smallint
//   )`);
//   await client.execute(`CREATE TABLE IF NOT EXISTS bookeddates (
//   listingId bigint PRIMARY KEY,
//   year smallint,
//   month tinyint,
//   date tinyint
//   )`);
  

//   const concurrencyLevel = 500;
//   const promises = new Array(concurrencyLevel);
  
// const info = {
//   totalLength: 10000,
//   counter: 0
// }



// const fetchBookedDates = function (bookedDates) {
//   const query = 'SELECT * FROM bookeddates WHERE listingId = ?';
//   client.execute(query, [bookedDates])
//   .then((result) => console.log('Booked dates retrieved from database', result));
// }

// const insertListing = function (listingId, maxGuests, maxInfants, chargePerNight, cleaningFee, serviceFee, occupancyFee, rating, numberOfRatings) {
//   // listingId, maxGuests, maxInfants, chargePerNight, cleaningFee, serviceFee, occupancyFee, rating, numberOfRatings
//   const query = 'INSERT INTO listings (listingId, maxGuests, maxInfants, chargePerNight, cleaningFee, serviceFee, occupancyFee, rating, numberOfRatings) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
//   client.execute(query, [listingId, maxGuests, maxInfants, chargePerNight, cleaningFee, serviceFee, occupancyFee, rating, numberOfRatings], { prepare : true })
//     .then((result) => console.log('Listings inserted into database'))
//     .catch((err) => console.log(err)); 
// }
// const fetchListing = function (listingId) {
//   const query = 'SELECT * FROM listings WHERE listingId = ?';
//   client.execute(query, (err, result) => {
//     assert.ifError(err);
//     console.log('Listing retrieved from database', result);
//   });
// }

// const insertBookedDates = function(listingId, year, month, date) {
//   const query = 'INSERT INTO bookeddates (listingId, year, month, date) VALUES (?, ?, ?, ?)';
//   client.execute(query, [listingId, year, month, date])
//     .then((result) => console.log('Bookings inserted into database'))
//     .catch((err) => console.log(err));
// }




// module.exports = {
//   fetchListing,
//   fetchBookedDates,
//   insertListing,
//   insertBookedDates,
// }



// // const dummyData = require('../database-sequelize/dummyData.js');
// // const cassandra = require('cassandra-driver');
// // const Uuid = cassandra.types.Uuid;

// // const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'reservations' });




// // async function example() {
// //   await client.connect();
// //   await client.execute(`CREATE KEYSPACE IF NOT EXISTS reservations
// //   WITH replication = { 'class': 'SimpleStrategy', 'replication_factor': '1' }`);
// //   await client.execute(`USE reservations`);
// //   await client.execute(`CREATE TABLE IF NOT EXISTS listings (
// //     listingId bigint PRIMARY KEY,
// //     maxGuests tinyint,
// //     maxInfants tinyint,
// //     chargePerNight smallint,
// //     cleaningFee tinyint,
// //     serviceFee tinyint,
// //     occupancyFee tinyint,
// //     rating tinyint,
// //     numberOfRatings smallint
// //     )`);
// //   await client.execute(`CREATE TABLE IF NOT EXISTS bookeddates (
// //     listingId bigint PRIMARY KEY,
// //   year smallint,
// //   month tinyint,
// //   date tinyint
// //   )`);
  

// //   const concurrencyLevel = 32;
// //   const promises = new Array(concurrencyLevel);

// //   const info = {
// //     totalLength: 500,
// //     counter: 0
// // }

// // for (let i = 0; i < concurrencyLevel; i++) {
// //   promises[i] = executeOneAtATime(info);
// // }

// // try {
// //   // The n promises are going to be resolved when all the executions are completed.
// //   await Promise.all(promises);
  
// //   console.log(`Finished executing ${info.totalLength} queries with a concurrency level of ${concurrencyLevel}.`);
  
// // } catch (err) {
// //   console.error(err);
// //   } finally {
// //     client.shutdown();
// //   } 
// // }

// // async function executeOneAtATime(info) {
// //   const query = 'INSERT INTO listings (listingId, maxGuests, maxInfants, chargePerNight, cleaningFee, serviceFee, occupancyFee, rating, numberOfRatings) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
// //   const options = { prepare: true, isIdempotent: true };
// //   // db.insertListing(j + 1, listings[j].maxGuests, listings[j].maxInfants, listings[j].chargePerNight, listings[j].cleaningFee, listings[j].serviceFee, listings[j].occupancyFee, listings[j].rating, listings[j].numberOfRatings);
// //   while (info.counter++ < info.totalLength) {
// //     console.log(info.counter);
// //     let data = dummyData.randomListingGenerator();
// //         const params = [info.counter, data.maxGuests, data.maxInfants, data.chargePerNight, data.cleaningFee, data.serviceFee, data.occupancyFee, data.rating, data.numberOfRatings];
// //         await client.execute(query, params, options);
// //       }
// // }

// // example();

// // let seedDatabaseWithListings = () => {
//   //   let listings = [];
//   //   for (let i = 1; i <= 100; i++) {
//     //     let data = dummyData.randomListingGenerator();
//     //     listings.push(data);
//     //     for (let j = 0; j < listings.length; j++) {
// //       db.insertListing(j + 1, listings[j].maxGuests, listings[j].maxInfants, listings[j].chargePerNight, listings[j].cleaningFee, listings[j].serviceFee, listings[j].occupancyFee, listings[j].rating, listings[j].numberOfRatings);
// //     }
// //   }
// // };

// // function insertHelper(index = 1) {
// //   if (index !== listings[listings.length - 1]) {
//   //     db.insertListing(index, listings[index].maxGuests, listings[index].maxInfants, listings[index].chargePerNight, listings[index].cleaningFee, listings[index].serviceFee, listings[index].occupancyFee, listings[index].rating, listings[index].numberOfRatings);
// //     insertHelper(index + 1); 
// //   } else {
//   //     return; 
//   //   };
// // }

// // let seedDatabaseWithBookings = () => {
// //   let bookings = [];
// //   for (let i = 1; i <= 2; i++) {
// //     bookings = bookings.concat(dummyData.randomBookingGenerator(i));
// //     for (let i = 0; i < bookings.length; i++) {
// //       db.insertBookedDates(i + 1, bookings[i].year, bookings[i].month, bookings[i].date);
// //     }
// //   }
// // };

// // seedDatabaseWithListings();
// // seedDatabaseWithBookings();


// // module.exports = {
// //   seedDatabaseWithListings,
// //   seedDatabaseWithBookings,
// // }
