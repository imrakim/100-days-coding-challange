function isLeap(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return "its Leap Year";
  } else {
    ("no leap year");
  }
}
console.log(isLeap(1970));

// for(let i = 1; i<=5; i++){
// multi= multi*i;
// console.log(multi);
// }
var multi = 1;
var i = 1;
while (i <= 10) {
  multi = multi * i;
  console.log(multi);
  i++;
}
