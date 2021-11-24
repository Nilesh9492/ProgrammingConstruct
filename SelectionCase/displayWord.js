var args = process.argv.slice(2);
var key = parseInt(args.slice(0));

switch (key) {
  case 1:
    console.log("One");
    break;
  case 10:
    console.log("Ten");
    break;
  case 100:
    console.log("Hundred");
    break;
  case 1000:
    console.log("Thousand");
    break;
  default:
    break;
}
