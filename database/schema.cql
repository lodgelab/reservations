DROP KEYSPACE IF EXISTS reservations;

CREATE KEYSPACE IF NOT EXISTS reservations WITH replication = { 'class': 'SimpleStrategy', 'replication_factor': '1' };

USE reservations;

CREATE TABLE IF NOT EXISTS listings (
    listingId bigint PRIMARY KEY,
    maxGuests smallint,
    maxInfants tinyint,
    chargePerNight smallint,
    cleaningFee tinyint,
    serviceFee tinyint,
    occupancyFee tinyint,
    rating tinyint,
    numberOfRatings smallint
);

CREATE TABLE IF NOT EXISTS bookeddates (
    listingId bigint PRIMARY KEY,
    year smallint,
    month tinyint,
    date tinyint
);

