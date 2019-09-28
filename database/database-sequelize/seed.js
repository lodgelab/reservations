/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const dummyData = require('./dummyData');
const db = require('./index');

db.sequelize.query('DROP DATABASE IF EXISTS reservations;')
  .then(() => db.sequelize.query('CREATE DATABASE reservations;'))
  .then(() => db.sequelize.query('USE reservations;'))
  .then(() => db.sequelize.sync())
  .then(() => {
    const listings = [];
    for (let i = 0; i < 100; i++) {
      listings.push(dummyData.randomListingGenerator());
    }
    return db.Listing.bulkCreate(listings);
  })
  .then(() => {
    let bookings = [];
    for (let i = 1; i <= 100; i++) {
      bookings = bookings.concat(dummyData.randomBookingGenerator(i));
    }
    return db.BookedDate.bulkCreate(bookings);
  })
  .then(() => console.log('tables and seed data created'))
  .catch((error) => console.log('Error creating tables', error));
