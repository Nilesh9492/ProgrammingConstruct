var array = [];
for (var i = 0; i < 5; i++) {
  array[i] = Math.floor(Math.random() * 900) + 99;
}
array.sort();
console.log(
  "Maximum Value : " + array[array.length - 1] + "Minimum Value : " + array[0]
);
