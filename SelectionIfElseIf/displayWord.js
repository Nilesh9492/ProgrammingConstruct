var args = process.argv.slice(2);
console.log(parseInt(args));

if (parseInt(args) === 1) {
  console.log("One");
} else if (parseInt(args) === 10) {
  console.log("Ten");
} else if (parseInt(args) === 100) {
  console.log("Hundred");
} else if (parseInt(args) === 1000) {
  console.log("Thousand");
}
