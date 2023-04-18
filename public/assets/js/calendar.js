
    document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'es',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      initialDate: '2020-09-12',
      navLinks: true, // can click day/week names to navigate views
      nowIndicator: true,

      weekNumbers: true,
      weekNumberCalculation: 'ISO',

      editable: true,
      selectable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [
        {
          title: 'Meeting',
          start: '2020-09-12T10:30:00',
          end: '2020-09-12T12:30:00'
        },
        {
          title: 'Jhorman',
          start: '2020-09-11T10:30:00',
          end: '2020-09-11T12:30:00'
        },
        {
          title: 'Jhorman',
          start: '2020-09-10T10:30:00',
          end: '2020-09-10T12:30:00'
        },
        {
          title: 'Jhorman',
          start: '2020-09-09T10:30:00',
          end: '2020-09-09T12:30:00'
        },
        {
          title: 'Jhorman',
          start: '2020-09-01T10:30:00',
          end: '2020-09-01T12:30:00'
        },
      ]

    });
    calendar.render();
  });
