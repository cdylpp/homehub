document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      contentHeight: 'auto',
      headerToolbar: {
        start: 'prev,today,next addEventButton',
        center: 'title',
        end: 'dayGridMonth,timeGridWeek,timeGridDay'
      },

      footerToolbar: {
        start: 'newCalendarButton',
        center: '',
        end: ''
      },

      // Add custom buttons
      customButtons: {
        addEventButton: {
          text: '+',
          click: function() {
            var eventName = prompt('Enter the event name:')
            var dateStr = prompt('Enter a date in yyyy-mm-dd format');
            var date = new Date(dateStr + 'T00:00:00');

            if (!isNaN(date.valueOf())) {
              calendar.addEvent({
                title: eventName,
                start: date,
                allDay: true
              });
              alert('Great. Now, update the database...');
            } else {
              alert('Invalid event entry.');
            }
          }
        },

        newCalendarButton: {
          text: 'Sync Calendar',
          click: function() {
            alert('This will sync a new calendar.')
          }
        }
      },
      // dateClick Function
      /* dateClick: function(info){
        // view events
        alert(info.dayEl);
        // change the day's background color just for fun
        info.dayEl.style.backgroundColor = 'red';
      }, */

      eventClick: function (info) {
        alert('Event: ' + info.event.title);
        alert('View: ' + info.view.type);
        info.el.style.borderColor = 'red';
      },

      dateClick: function(info){
        const date = info.dateStr;
        var eventName = prompt('Enter new event for '+ date);
        if(eventName == "" || eventName == null){
            alert('Event Canceled');
        } else{
            calendar.addEvent({
                title: eventName,
                start: date,
                allDay: true
                });
            alert('Event added, now upate the database.');
        }

      }
    });

    allEvents = {
        events: [
        {
            title: 'CSC441 Meeting',
            start: '2023-10-16T18:00:00',
            allDay: false
        },
        {
            title: 'CSC441 Meeting',
            start: '2023-10-18T18:00:00',
            allDay: false 
        },
        {
            title: 'Halloween',
            start: '2023-10-31'
        },
        {
            title: 'Luckiest Friday',
            start: '2023-10-13'
        }
        ],
        color: 'black',
        textColor: 'orange'
    };

    calendar.render();
    calendar.addEventSource(allEvents);
  });