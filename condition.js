//let check simple condition statements

let age = 14;
if (age > 18) {
  console.log("you can vote");
}
if (age < 18) {
  console.log("you can not vote");
}

let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}
console.log(color);

let num = 7;
if (num % 2 === 0) {
  console.log(num,'is even');
}
else{
    console.log(num,'is odd');
}


let colormode= 'blue';

if(colormode==='black'){
    console.log('show color is black');
}
else if(colormode==='light'){
    console.log('show color is whte');
}
else if(colormode==='blue'){
    console.log('show color is blue');
}
else{
    colormode='green'
}
console.log(colormode);



// ternary operator
let myAge=20;
let result = myAge>=18? 'adult':'not adult';
console.log(result);

let input= prompt("hello value");
if(input % 5 === 0){
    console.log(input,'number is multiple of 5');
}
else{
    console.log(input,'number is not multiple of 5');
}


let score = 95;
let grade;

