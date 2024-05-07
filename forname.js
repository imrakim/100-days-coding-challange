let head = "";
let body = "";

const countries = [
  { reagion: "Asia", name: "Bangladesh", cncode: "Bd" },
  {
    reagion: "Asia",
    name: "India",
    cncode: "In",
  },
];

for (const country of countries) {
  head += `<td> ${country.name}</td>`;
  body += `<td> ${country.cncode}</td>`;
}
document.getElementById(
  "myTable"
).innerHTML = `<tr>${head}</tr> <tr>${body}</tr>`;
