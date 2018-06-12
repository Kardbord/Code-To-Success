import moment from 'moment';

// Epoch timestamp - number of seconds that have elapsed since January 1, 1970
const now = moment.now();

// Creating a new date object for right now
moment();

// Creating date object with a specific date/format
const birthday = moment('1983-07-31', 'YYYY-MM-DD');

// Querying a named day of the week for a date
console.log(birthday.format('dddd'));

// Date counter
birthday.fromNow();

// Custom foramtted date
birthday.format("MMM Do YYYY");

// Date calculations
const twoWeeksFromNow = moment().add(14, 'days');
const anotherTwoWeeksFromNow = moment().add(2, 'weeks');
const sixMonthsAgo = moment().subtract(6, 'm');