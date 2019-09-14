CREATE DATABASE reservations
  WITH ENCODING='UTF8';

CREATE TABLE listings (
  id SERIAL PRIMARY KEY,
  maxGuests SMALLINT,
  maxInfants SMALLINT,
  chargePerNight SMALLINT,
  cleaningFee SMALLINT,
  serviceFee SMALLINT,
  occupancyFee SMALLINT,
  rating SMALLINT,
  numberOfRatings SMALLINT
);

CREATE TABLE bookeddates (
  id SERIAL PRIMARY KEY,
  year SMALLINT NOT NULL,
  month SMALLINT NOT NULL,
  date SMALLINT NOT NULL,
  listingId INTEGER NOT NULL,
  FOREIGN KEY(listingId) REFERENCES listings(id)
);

CREATE INDEX listingID_idx ON bookeddates (listingId);




