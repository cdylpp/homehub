const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const url = process.env.MONGO_URL
const Event = require('../../public/models/Events.js');

main().catch(err => console.log(err));

async function main() {
    // Create DB
    await mongoose.connect(url);

    // Create students
    const first = new Event({
        title: "Project Due Date",
        start: "2023-10-22",
        
    });
    const second = new Event({
        title: "Move Day",
        start: "2023-11-01",
        
    });
    const third = new Event ({
        title: "Zoom Meeting",
        start: "2023-10-25T09:00:00",
        allDay: false
    });

    // Insert
    await first.save();
    await second.save();
    await third.save();

}
