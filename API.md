# Reservations Routes - Lodge Lab


## Table of Contents

1. [GET](#GET)
2. [POST](#POST)
3. [PUT](#PUT)
4. [DELETE](#DELETE)

 ## GET
 ### Read Listings 

 ### URL
 ```
 /api/listings
 ```
 ### Method: 
 ```sh
 GET
 ```
 ### URL Params
 ```sh
 listing id = integer
 ```
 ### Success Response:
 - Content:
 ```javascript
 {
     id: 3,
     maxGuests: 8,
     maxInfants: 2, 
     chargePerNight: 291, 
     cleaningFee: 44,
     serviceFee: 24,
     occupancyFee: 6,
     rating: 10,
     numberOfRatings: 423
 }
 ```

 ## Read Booked Dates 
 ### URL
 ```
 /api/listings/:id/booked-dates
 ```
 ### Method: 
 ```sh
 GET
 ```
 ### URL Params
 ```sh
 listing id = integer
 ```
 ### Data Params
 None
 ### Success Response:
 - Content: 
  ```javascript
 {
     id: 2,
     year: 2019,
     month: 8,
     date: 5,
     listingId: 1
 }
 ```


 ## POST
 ### Create Listings 
 
 ### URL
 ```
 /api/listings
 ```
 ### Method: 
 ```sh
 POST
 ```
 ### URL Params
 ```sh
 listing id = integer
 ```
 ### Body
 ``` javascript
 {
     id: 5,
     maxGuests: 2,
     maxInfants: 1, 
     chargePerNight: 100, 
     cleaningFee: 20,
     serviceFee: 10,
     occupancyFee: 3,
     rating: 6,
     numberOfRatings: 202
 }
 ```


 ## Create Booked Dates 
 ### URL
 ```
 /api/listings/:id/booked-dates
 ```
 ### Method: 
 ```sh
 POST
 ```
 ### URL Params
 ```sh
 listing id = integer
 ```
 ### Body
 ``` javascript
 {
     id: 5,
     year: 2019,
     month: 9,
     date: 10,
     listingId: 2
 }
 ```


 ## PUT
 ### Update Listings 

 ### URL
 ```
 /api/listings
 ```
 ### Method: 
 ```sh
 PUT
 ```
 ### URL Params
 ```sh
 listing id = integer
 ```
 ### Body
 ``` javascript
 {
     id: 10,
     maxGuests: 2,
     maxInfants: 1, 
     chargePerNight: 100, 
     cleaningFee: 20,
     serviceFee: 10,
     occupancyFee: 3,
     rating: 8,
     numberOfRatings: 202
 }
 ```


 ## Update Booked Dates 
 ### URL
 ```
 /api/listings/:id/booked-dates
 ```
 ### Method: 
 ```sh
 PUT
 ```
 ### URL Params
 ```sh
 listing id = integer
 ```
 ### Body
 ``` javascript
 {
     id: 10,
     year: 2019,
     month: 10,
     date: 15,
     listingId: 2
 }
 ```


 ## DELETE
 ### Delete Listings 

 ### URL
```
 /api/listings
 ``` 
 ### Method: 
 ```sh
 DELETE
 ```
 ### URL Params
 ```sh
 listing id = integer
 ```
 ### Body
 ``` javascript
 {
    listingId: 3,
 }
 ```



 ## Read Booked Dates 
 ### URL
 ```
 /api/listings/:id/booked-dates
 ```
 ### Method: 
 ```sh
 DELETE
 ```
 ### URL Params
 ```sh
 listing id = integer
 ```
 ### Body
 ``` javascript
 {
    listingId: 3,
 }
 ```
 

