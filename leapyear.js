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

function check(n) {
  var i = 1;
  var check = 1;
  while (i <= n) {
    check = check * i;
    i++;
  }
  return check;
}
let result = check(10);
console.log(result);
