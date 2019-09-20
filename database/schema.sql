CREATE DATABASE reservations
  WITH ENCODING='UTF8';

\connect reservations;

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
  listingId INTEGER,
  year SMALLINT,
  month SMALLINT,
  date SMALLINT,
  FOREIGN KEY(listingId) REFERENCES listings(id)
);

CREATE INDEX listingID_idx ON bookeddates(listingId);




