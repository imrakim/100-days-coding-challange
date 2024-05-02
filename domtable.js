let myTable = "";

// const countries = [
//   { cnname: "Country name",
//   mohadesh: "reagion",
//   reagion:"Asia",
//    name: "Bangladesh",
//     code: "Conuntry code",
//     cncode:"Bd"
//   },
//   {
//     cnname: "Country name",
//     mohadesh:"reagion",
//     reagion:"Asia",
//     name: "India",
//     code: "Country Code",
//     cncode:"In"
//   },
//   {
//     cnname: "Country name",
//     mohadesh:"reagion",
//     reagion:"us state",
//     name: "Canada",
//     code: "Country Code",
//     cncode:"ca"
//   },
//   {
//     cnname: "Country name",
//     mohadesh:"reagion",
//     reagion:"us state",
//     name: "America",
//     code: "Country Code",
//     cncode:"us"
//   },
// ];
const countries = [
  { reagion: "Asia", name: "Bangladesh", cncode: "Bd" },
  {
    reagion: "Asia",
    name: "India",
    cncode: "In",
  },
];
let tableHead = `<tr><th>Country Name</th><th>Region</th><th>Country Code</th></tr>`
for (const country of countries) {
  myTable +=
    "<tr><td>" +
     country.name +
    "</td><td>" +
    country.reagion +
    "</td><td>" +
    country.cncode +
    "</td></tr>";
}
document.getElementById("myTable").innerHTML = tableHead + myTable;
