var args = process.argv.slice(2);
let a = parseInt(args.slice(0));
let b = parseInt(args.slice(1));
let c = parseInt(args.slice(2));

let expression1 = a + b * c;
let expression2 = (a % b) + c;
let expression3 = c + a / b;
let expression4 = a * b + c;

console.log("Maximum of Expressions : ");
if (
  expression1 > expression2 &&
  expression1 > expression3 &&
  expression1 > expression4
) {
  console.log("a + b * c");
} else if (
  expression2 > expression1 &&
  expression2 > expression3 &&
  expression2 > expression4
) {
  console.log("a % b + c");
} else if (
  expression3 > expression1 &&
  expression3 > expression2 &&
  expression3 > expression4
) {
  console.log("c + a / b");
} else if (
  expression4 > expression1 &&
  expression4 > expression2 &&
  expression4 > expression3
) {
  console.log("a * b + c");
}

console.log("Minimum of Expressions : ");
if (
  expression1 < expression2 &&
  expression1 < expression3 &&
  expression1 < expression4
) {
  console.log("a + b * c");
} else if (
  expression2 < expression1 &&
  expression2 < expression3 &&
  expression2 < expression4
) {
  console.log("a % b + c");
} else if (
  expression3 < expression1 &&
  expression3 < expression2 &&
  expression3 < expression4
) {
  console.log("c + a / b");
} else if (
  expression4 < expression1 &&
  expression4 < expression2 &&
  expression4 < expression3
) {
  console.log("a * b + c");
}
