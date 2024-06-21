function isLeap(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return "its Leap Year";
  } else {
    ("AThis Is Not Leap Year");
  }
}
console.log(isLeap(2020));
