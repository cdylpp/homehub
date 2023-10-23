const router = require('express').Router();
const Event = require('../../public/models/Events.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const url = process.env.MONGO_URL

router.get('/events', async (req, res)=> {
    await mongoose.connect(url);
    Event.find({}, function(err, data){
        if(err){
            res.json({message: 'Unable to connect to events'});
        } else {
            res.json(data);
        }
    });
});

module.exports = router;