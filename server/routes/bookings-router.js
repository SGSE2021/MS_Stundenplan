const express = require('express');
const router = express.Router();
const booking_calls = require('../neo4j_calls/booking');


// router.get('/:userId', async function (req, res, next) {
//     //let { userId } = req.body;
//     let result = await booking_calls.getBookingsByUserId(userId);
//     console.log("RESULT IS", result)
//     res.status(200).send({ result })    //Can't send just a Number; encapsulate with {} or convert to String.     
//     return { result };
// })

router.get('/', async function (req, res, next) {
    let result = await booking_calls.getBookings();
    console.log("RESULT IS", result)
    res.status(200).send({ result })    //Can't send just a Number; encapsulate with {} or convert to String.     
    return { result };
})

module.exports = router;