let aSampleString = "<li></li>";
let tdString = "";

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
//   aSampleString += "<li>Hiiiiii !!!</li>";
// }

for(const country of countries){
    // aSampleString += "<li>${country.name}</li>";
    aSampleString += "<li>" + country.name + "</li>";
  }

for(const country of countries){
    // aSampleString += "<li>${country.name}</li>";
    tdString += `<tr><td> ${country.name} </td><td> ${country.code} </td></tr>`;
  }

  
document.getElementById("myContainer").innerHTML = aSampleString;
document.getElementById("myTable").innerHTML = tdString;
