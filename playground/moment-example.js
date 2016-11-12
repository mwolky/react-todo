var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log(now.unix());

var timestamp = 1478892863;
var currentMoment = moment.unix(timestamp);
console.log(currentMoment.format('MMMM Do, YYYY @ h:mmA'));
