'use strict'
//DEFAULT PARAMETERS
const bookings = [];

const crateBooking = function (
    flightNum, numPassenger = 2 , price = 199 * 10
){
    const booking ={
        flightNum,
        numPassenger,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};
crateBooking('LH123');
crateBooking('LH123', 2, 800);
crateBooking('LH123', 2);