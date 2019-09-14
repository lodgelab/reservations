const dummyData = require('../database-sequelize/dummyData.js');
const fs = require('fs'); 
const zlib = require('zlib');
const gzip = zlib.createGzip();

const wstream = gzip.createWriteStream('./listings_test.csv.gz', { encoding: 'utf-8' });
// const wstream = gzip.createWriteStream('./bookeddates.csv.gz', { encoding: 'utf-8' });




async function writeListingsToFile() {
  for (let i = 1; i <= 1000; i++) {
    let data = dummyData.randomListingGenerator();
    data = `${i},${data.maxGuests},${data.maxInfants},${data.chargePerNight},${data.cleaningFee},${data.serviceFee},${data.occupancyFee},${data.rating},${data.numberOfRatings}\n`;
    console.log(data);
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

async function writeBookingsToFile() {
  // let bookings = [];
  for (let i = 1; i <= 10000000; i++) {
    console.log(i);
    // bookings = bookings.concat(dummyData.randomBookingGenerator(i));
    let bookings = dummyData.randomBookingGenerator(i);
    for (let i = 0; i < bookings.length; i++) {
      let data = `${bookings[i].listingId}, ${bookings[i].year}, ${bookings[i].month}, ${bookings[i].date}\n`;
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



writeListingsToFile();
// writeBookingsToFile();



