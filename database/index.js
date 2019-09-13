const { Client } = require('pg');
const client = new Client();
const dummyData = require('./database-sequelize/dummyData.js');

client.connect(); 


const seedListings() {
  const listings = [];
  for (let i = 0; i < 100; i++) {
    listings.push(dummyData.randomListingGenerator());
  }
  const query = 'INSERT INTO listings(id, maxGuests, maxInfants, chargePerNight, cleaningFee, serviceFee, occupancyFee, rating, numberOfRatings) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [id, maxGuests, maxInfants, chargePerNight, cleaningFee, serviceFee, occupancyFee, rating, numberOfRatings];
  
  client.query(query, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res);
    }
  });
}



