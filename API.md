# Reservations Routes - Lodge Lab


## Table of Contents

1. [GET](#GET)
2. [POST](#POST)
3. [PUT](#PUT)
4. [DELETE](#DELETE)

##GET
 ###Read Listings 

 ###URL
 http://localhost:3001/api/dblistings
 ###Method: 
 ```sh
 GET
 ```
 ###URL Params
 ```sh
 listing id = [integer]
 ```
 ###Data Params
 None
 ###Success Response:
 - Code: 200
 - Content: {
     id: NULL,
     maxGuests: 8,
     maxInfants: 2, 
     chargePerNight: 291, 
     cleaningFee: 44,
     serviceFee: 24,
     occupancyFee: 6,
     rating: 10,
     numberOfRatings: 423
 }
 ###Error Response: 
 - Code: 404 NOT FOUND
 - Content: { error: 'listing does not exist' }
 ###Sample Call: 


##Read Booked Dates 
 ###URL
 http://localhost:3001/api/dbbookeddates
 ###Method: 
 ```sh
 GET
 ```
 ###URL Params
 ```sh
 listing id = [integer]
 ```
 ###Data Params
 None
 ###Success Response:
 - Code: 200
 - Content: {
     id: NULL,
     year: 2019,
     month: 8,
     date: 5,
     listingId: 1
 }
 ###Error Response: 
 - Code: 404 NOT FOUND
 - Content: { error: 'booking dates do not exist' }
 ###Sample Call: 


##POST
 ###Create Listings 
 
 ###URL
 http://localhost:3001/api/createlistings
 ###Method: 
 ```sh
 POST
 ```
 ###URL Params
 ```sh
 listing id = [integer]
 ```
 ###Data Params
 None
 ###Success Response:
 - Code: 201
 - Content: {
     id: NULL,
     maxGuests: 2,
     maxInfants: 1, 
     chargePerNight: 100, 
     cleaningFee: 20,
     serviceFee: 10,
     occupancyFee: 3,
     rating: 6,
     numberOfRatings: 202
 }
 ###Error Response: 
 - Code: 404 NOT FOUND
 - Content: { error: 'listing was not created' }
 ###Sample Call: 


##Create Booked Dates 
 ###URL
 http://localhost:3001/api/createbookeddates
 ###Method: 
 ```sh
 POST
 ```
 ###URL Params
 ```sh
 listing id = [integer]
 ```
 ###Data Params
 None
 ###Success Response:
 - Code: 200
 - Content: {
     id: NULL,
     year: 2019,
     month: 9,
     date: 10,
     listingId: 2
 }
 ###Error Response: 
 - Code: 404 NOT FOUND
 - Content: { error: 'booking dates were not created' }
 ###Sample Call: 


 ##PUT
 ###Update Listings 

 ###URL
 http://localhost:3001/api/updatelistings
 ###Method: 
 ```sh
 PUT
 ```
 ###URL Params
 ```sh
 listing id = [integer]
 ```
 ###Data Params
 None
 ###Success Response:
 - Code: 200
 - Content: {
     id: NULL,
     maxGuests: 2,
     maxInfants: 1, 
     chargePerNight: 100, 
     cleaningFee: 20,
     serviceFee: 10,
     occupancyFee: 3,
     rating: 8,
     numberOfRatings: 202
 }
 ###Error Response: 
 - Code: 404 NOT FOUND
 - Content: { error: 'listing was not updated' }
 ###Sample Call: 


 ##Update Booked Dates 
 ###URL
 http://localhost:3001/api/updatebookeddates
 ###Method: 
 ```sh
 PUT
 ```
 ###URL Params
 ```sh
 listing id = [integer]
 ```
 ###Data Params
 None
 ###Success Response:
 - Code: 200
 - Content: {
     id: NULL,
     year: 2019,
     month: 10,
     date: 15,
     listingId: 2
 }
 ###Error Response: 
 - Code: 404 NOT FOUND
 - Content: { error: 'booking dates were not updated' }
 ###Sample Call: 


 ##DELETE
 ###Delete Listings 

 ###URL
 http://localhost:3001/api/deletelistings
 ###Method: 
 ```sh
 DELETE
 ```
 ###URL Params
 ```sh
 listing id = [integer]
 ```
 ###Data Params
 None
 ###Success Response:
 - Code: 200

 ###Error Response: 
 - Code: 404 NOT FOUND
 - Content: { error: 'listing was not deleted' }
 ###Sample Call: 


##Read Booked Dates 
 ###URL
 http://localhost:3001/api/deletebookeddates
 ###Method: 
 ```sh
 DELETE
 ```
 ###URL Params
 ```sh
 listing id = [integer]
 ```
 ###Data Params
 None
 ###Success Response:
 - Code: 200

 ###Error Response: 
 - Code: 404 NOT FOUND
 - Content: { error: 'booking dates were not deleted' }
 ###Sample Call: 

