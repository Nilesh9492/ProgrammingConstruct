var args = process.argv.slice(2);
console.log(args);
key = args.splice(1) + "";
switch (key) {
  case "march":
    if (args.slice(0) > 20) {
      check();
    }
    break;

  case "april":
    check();
    break;

  case "may":
    check();
    break;

  case "june":
    if (args.slice(0) < 20) {
      check();
    }
    break;
  default:
    break;
}
function check() {
  console.log("true");
}
