import moment from "moment";
import { v4 as uuidv4 } from "uuid";
let seat = 5;

function DaysInMonth(start, end, day) {
  var result = [];
  var current = start.clone();

  while (current.day(7 + day).isSameOrBefore(end)) {
    result.push(moment(current.clone()).format());
  }
  return result;
}

export const generateTimeTable = () => {
  // DaysInMonth();
  var SatResult = [];
  var FriResult = [];
  var WedResult = [];
  var result = [];

  var MondayDates = DaysInMonth(moment("2021-08-01"), moment("2021-10-01"), 1);

  var WedDates = DaysInMonth(moment("2021-08-01"), moment("2021-10-01"), 3);
  WedResult = WedDates.map((v) => {
    return {
      id: uuidv4(),
      name: "Java",
      date: moment(v).format("ddd,MMMM Do YYYY"),
      time: "5:00-6:00",
      available: Math.floor(Math.random() * seat),
      isBooked: false,
    };
  });

  var FriDates = DaysInMonth(moment("2021-08-01"), moment("2021-10-01"), 5);
  FriResult = FriDates.map((v) => {
    return {
      id: uuidv4(),
      name: "HTML",
      date: moment(v).format("ddd,MMMM Do YYYY"),
      time: "9:00-10:00",
      available: Math.floor(Math.random() * seat),
      isBooked: false,
    };
  });

  var SatDates = DaysInMonth(moment("2021-08-01"), moment("2021-10-01"), 6);
  SatResult = SatDates.map((v) => {
    return {
      id: uuidv4(),
      name: "HTML",
      date: moment(v).format("ddd,MMMM Do YYYY"),
      time: "9:00-10:00",
      available: Math.floor(Math.random() * seat),
      isBooked: false,
    };
  });

  result = MondayDates.map((v) => {
    return {
      id: uuidv4(),
      name: "Python",
      date: moment(v).format("ddd, MMMM Do YYYY"),
      time: "4:00-5:00",
      available: Math.floor(Math.random() * seat),
      isBooked: false,
    };
  });
  return [...result, ...WedResult, ...FriResult, ...SatResult];
};
