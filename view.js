"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return "You liked this.";
//     }

//     return e(
//       "button",
//       { onClick: () => this.setState({ liked: true }) },
//       "Like"
//     );
//   }
// }

// const domContainer = document.querySelector("#react_container");
// ReactDOM.render(e(LikeButton), domContainer);

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "listMonth",
    displayEventTime: false,
    headerToolbar: {
      start: "prevYear,nextYear",
      center: "title",
      end: "prev,next",
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

  var calendarE2 = document.getElementById("calendar2");
  var calendar2 = new FullCalendar.Calendar(calendarE2, {
    initialView: "listMonth",
    displayEventTime: false,
    headerToolbar: {
      start: "prevYear,nextYear",
      center: "title",
      end: "prev,next",
    },
    events: [
      { title: "event 1", date: "2020-08-13" },
      { title: "event 2", date: "2020-08-15" },
      { title: "event 2", date: "2020-08-15" },
      { title: "event 2", date: "2020-08-15" },
      { title: "event 2", date: "2020-08-15" },
      { title: "event 2", date: "2020-08-15" },
      { title: "event 2", date: "2020-08-15" },
    ],
  });
  calendar2.render();

  document.getElementById("btn").onclick = () => {
    calendar2.gotoDate(new Date(2018, 8, 1));
  };
});
