const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const url = process.env.MONGO_URL
  
async function pullUserEvents(id){
    await mongoose.connect(url);
    const events = await Event.find();
    return events;
};
  
function generateEvents(eventsData) {
  let events = [];
  for (const e of eventsData){
    let date = new Date(e.dateStr + start);
    const newEvent = {
      title: e.eventName,
      start: date,
      duration: e.duration,
      allDay: e.allDay,
    }
    events.push(newEvent);
  }
  return events;
};
  
async function pushUserEvents(name, date, startTime, duration, allDay) {
  await mongoose.connect(url);
  const newEvent = new Event({
    title: name,
    date: date,
    start: startTime,
    duration: duration,
    allDay: allDay,

  });
  await newEvent.save();
};