var args = process.argv.slice(2);
console.log(parseInt(args));

if (parseInt(args) === 1) {
  console.log("Sunday");
} else if (parseInt(args) === 2) {
  console.log("Monday");
} else if (parseInt(args) === 3) {
  console.log("Tuesday");
} else if (parseInt(args) === 4) {
  console.log("Wednesday");
} else if (parseInt(args) === 5) {
  console.log("Thursday");
} else if (parseInt(args) === 6) {
  console.log("Friday");
} else if (parseInt(args) === 7) {
  console.log("Saturday");
}
