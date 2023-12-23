const mongoose = require('mongoose')

const reservationInformation = new mongoose.Schema({
    userID:{
        type:String,
        required:[true,"A reservattion must have a user"]
    },
    reservationDate:{
        type:Date,
        required:[true,"A reservattion must have a user"]
    },
    reservationTime:{
        type:String,
        required:[true,"A reservattion must have a user"]
    },
    numberOfGuests:{
        type:Number,
        required:[true,"A reservattion must have a user"]
    },
    occassion:{
        type:String,
        required:[true,"A reservattion must have a user"]
    }

})

const ReservationInformation = mongoose.model('ReservationInformation', reservationInformation)

module.exports = ReservationInformation