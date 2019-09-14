const { Client } = require('pg');
const client = new Client();
const dummyData = require('../database-sequelize/dummyData.js');
const fs = require('fs');

const wstream = fs.createWriteStream('./bookeddates_postgres.csv', { encoding: 'utf-8' }); 

client.connect(); 

async function generateBookedDates() {
  for (let i = 1; i <= 10000000; i++) {
    console.log(i);
    let bookings = dummyData.randomBookingGenerator(i);
    for (let i = 0; i < bookings.length; i++) {
      let data = `${i},${bookings[i].year},${bookings[i].month},${bookings[i].date},${bookings[i].listingId}\n`;
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


// const generateBookedDates() {
//   const listings = [];
//   for (let i = 0; i < 100; i++) {
//     listings.push(dummyData.randomListingGenerator());
//   }
//   const query = 'INSERT INTO listings(id, maxGuests, maxInfants, chargePerNight, cleaningFee, serviceFee, occupancyFee, rating, numberOfRatings) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)';
//   const values = [id, maxGuests, maxInfants, chargePerNight, cleaningFee, serviceFee, occupancyFee, rating, numberOfRatings];
  
//   client.query(query, (err, res) => {
//     if (err) {
//       console.log(err.stack);
//     } else {
//       console.log(res);
//     }
//   });
// }

generateBookedDates();



