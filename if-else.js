const loginPassword = "rakim123@";
const loginEmail = "rakimali770@gmail.com";

const registerPassword = "rakim123@";
const registerEmail = "rakimali770@gmail.com";

if (loginPassword === registerPassword || loginEmail === registerEmail) {
  console.log("Login success");
} else {
  console.log("enter correct Password");
}
// let apple = "Apple";
// let orange = "Orange";
// console.log("Apple" != "Orange"); //  not equal

// let number = 8;
// let string = 8;

// console.log(number !== string);
// Output: false // when data type and value is Diffrent then the console show True - when datatype and value is same  then console show you false.

const marks = 1000;

if (marks >= 80 && marks <= 100) {
  console.log("A+");
} else if (marks >= 70 && marks <= 79) {
  console.log("A");
} else if (marks >= 60 && marks <= 69) {
  console.log("A-");
} else if (marks >= 50 && marks <= 59) {
  console.log("B");
} else if (marks >= 40 && marks <= 49) {
  console.log("-B");
} else if (marks >= 33 && marks <= 39) {
  console.log("D");
} else {
  console.log("wrong input");
}



let rakim = 45;
let rafi = 40;

rakim >= rafi ? console.log(" equal"): console.log("not Equal");
