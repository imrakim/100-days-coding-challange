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

let backTik = `What's "Your" Name ?`; // using bacaktik - backtik similar to quations. But you can Do SomeThing Boom, inside bacaktik you can use single qatt and double qatt. -----  backtik allow both single quotes and  double
console.log(backTik);

function interpolite() {
  let price = 10;
  let vat = 1;
  let total = `Tottal:${price * (vat + 1).toFixed(2)}`;
  return total;
}
console.log(interpolite());




let x = "12";
let xi = x.toString();
console.log(xi);