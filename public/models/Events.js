const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: String,
    date: String,
    start: String,
    duration: String,
    allDay: Boolean,
});

module.exports = mongoose.model('Event', eventSchema, 'events');