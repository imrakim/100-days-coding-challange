// function myFunction(fullName){
//     console.log('hello' + fullName);
// }
// myFunction(' rakim')
// myFunction(' bhai')
// myFunction(' web Designer')

// function helloJs(fristName, lastName, age, dateofbirth = 1991, hello) {
//   console.log(fristName + lastName + age + dateofbirth);
// }
// helloJs("Rakim", " Ali", " Im 22 years old ", 2003);

// //automatic function

// (function (hi) {
//   console.log(" Developer Familly ", hi);
// })("hello");



// standard function definition

function sayHello1(){
	return "Hello1";
}

console.log(sayHello1());
// anonymous

let sayHello2 = function(){
	return "Hello2";
}
console.log(sayHello2());

// arrow function
let sayHello3 = () => {
	return "Hello3";
}

let sayHello4 = () => { return "Hello3";}

console.log(sayHello4());
	
let greet = ( aGreeting ) => aGreeting


console.log( greet("aGreeting") );
