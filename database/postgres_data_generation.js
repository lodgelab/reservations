const { Client } = require('pg');
const client = new Client();
const dummyData = require('../database-sequelize/dummyData.js');
const fs = require('fs');
const zlib = require('zlib');
const wstream = zlib.createGzip();

client.connect(); 

wstream.pipe(fs.createWriteStream('./listings_postgres.csv.gz', { encoding: 'utf-8' }));
// wstream.pipe(fs.createWriteStream('./bookeddates_postgres_test.csv.gz', { encoding: 'utf-8' }));

async function generateListings() {
  for (let i = 1; i <= 10000000; i++) {
    let data = dummyData.randomListingGenerator();
    data = `${data.maxGuests},${data.maxInfants},${data.chargePerNight},${data.cleaningFee},${data.serviceFee},${data.occupancyFee},${data.rating},${data.numberOfRatings}\n`;
    const ableToWrite = wstream.write(data); 
    if (!ableToWrite) {
      await new Promise(resolve => {
        wstream.once('drain', resolve)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
};


async function generateBookedDates() {
  for (let i = 1; i <= 10000000; i++) {
    console.log(i);
    let bookings = dummyData.randomBookingGenerator(i);
    for (let i = 0; i < bookings.length; i++) {
      let data = `${bookings[i].listingId},${bookings[i].year},${bookings[i].month},${bookings[i].date}\n`;
      const ableToWrite = wstream.write(data); 
      if (!ableToWrite) {
          await new Promise(resolve => {
            wstream.once('drain', resolve)
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  }
}




generateListings();
// generateBookedDates();



