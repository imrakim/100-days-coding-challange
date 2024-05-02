let aSampleString = "";
let myTable = "";

const countries = [
  {
    name: "Bangladesh",
    code: "BD",
  },
  {
    name: "India",
    code: "IN",
  },
];


// for (const country of countries) {
//   aSampleString += `<li> ${country.name}</li>`;
// }
for (const country of countries) {
  myTable += `<tr><td> ${country.name}</td></tr>`
}

document.getElementById("myContainer").innerHTML = aSampleString;
document.getElementById("myTable").innerHTML = myTable;

