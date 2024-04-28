// function myFunction(fullName){
//     console.log('hello' + fullName);
// }
// myFunction(' rakim')
// myFunction(' bhai')
// myFunction(' web Designer')

function helloJs(fristName, lastName, age, dateofbirth = 1991, hello) {
  console.log(fristName + lastName + age + dateofbirth);
}
helloJs("Rakim", " Ali", " Im 22 years old ", 2003);

//automatic function

(function (hi) {
  console.log(" Developer Familly ", hi);
})("hello");
