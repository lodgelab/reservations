const flooredRandomNumber = (number) => {
  return Math.floor(Math.random() * number);
};

const randomListingGenerator = () => {
  let cleaningFee = flooredRandomNumber(50);
  let serviceFee = flooredRandomNumber(25);
  let occupancyFee = flooredRandomNumber(20);

  return {
    maxGuests: flooredRandomNumber(10) + 1,
    maxInfants: flooredRandomNumber(5),
    chargePerNight: flooredRandomNumber(500) + 1,
    cleaningFee: cleaningFee || 0,
    serviceFee: serviceFee || 0,
    occupancyFee: occupancyFee || 0,
    rating: flooredRandomNumber(11),
    numberOfRatings: flooredRandomNumber(100) + 1,
  };
};

const randomBookingGenerator = (listingId) => {
  let dates = [];

  for (let j = 8; j < 11; j++) {
    for (let i = 1; i < 7; i++) {
      if (Math.random() > 0.5) {
        dates.push({
          year: 2019,
          month: j,
          date: i,
          listingId,
        });
      }
    }
    if (j === 9) {
      if (Math.random() > 0.5) {
        dates.push({
          year: 2019,
          month: 9,
          date: 31,
          listingId,
        });
      }
    }
  }

  return dates;
};

module.exports = {
  randomListingGenerator,
  randomBookingGenerator,
};