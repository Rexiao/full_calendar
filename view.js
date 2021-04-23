"use strict";

const calendar_array = [];

document.addEventListener("DOMContentLoaded", function () {
  // get array of div containing calendar
  let calendar_container_array = document.getElementsByClassName("calendar");

  for (let i = 0; i < calendar_container_array.length; i++) {
    let container_container = calendar_container_array[i];
    let calendar = new FullCalendar.Calendar(container_container, {
      initialView: "listMonth",
      displayEventTime: false,
      headerToolbar: {
        start: null,
        center: "title",
        end: null,
      },
      events: [
        { title: "event 1", date: "2020-08-13" },
        {
          title: "event",
          date: "2020-08-15",
        },
        { title: "event 2", date: "2020-08-15" },
        { title: "event 2", date: "2020-08-15" },
        { title: "event 2", date: "2020-08-15" },
        { title: "event 2", date: "2020-08-15" },
        { title: "event 2", date: "2020-08-15" },
      ],
    });
    calendar.render();
    calendar_array.push(calendar);
  }

  // document.getElementById("btn").onclick = () => {
  //   calendar2.gotoDate(new Date(2018, 8, 1));
  // };
});
