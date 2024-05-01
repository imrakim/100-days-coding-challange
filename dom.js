let aSampleString = "<li></li>";

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
    aSampleString += "<li>${country.name}</li>";
  }
  
document.getElementById("myContainer").innerHTML = aSampleString;
