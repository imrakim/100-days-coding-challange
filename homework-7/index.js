const countries = [
  {
    reagion: "Asia",
    name: "Bangladesh",
    cncode: "Bd",
  },
  {
    reagion: "Asia",
    name: "India",
    cncode: "In",
  },
  {
    reagion: "Asia",
    name: "Srilanka",
    cncode: "Sl",
  },
  {
    reagion: "Asia",
    name: "Afganistan",
    cncode: "AF",
  },
  {
    reagion: "Asia",
    name: "Chaina",
    cncode: "CH",
  },
];
let showingTable = "";
for (const country of countries) {
  showingTable += `<tr>
  <td>${country.reagion}</td>
  <td>${country.name}</td>
  <td>${country.cncode}</td>
</tr>`;
}
// Function defination

function loadData() {
  // document.getElementById("myTable").innerHTML=`<tr>${head}</tr> <tr>${body}</tr>`;
  const tbodyOfTable2 = document.querySelector("#myTable2 tbody");
  tbodyOfTable2.innerHTML = showingTable;
}

// Function Call
// loadData();
