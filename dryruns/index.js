// let head = "";
// let body = "";

const countries = [
  {
    region: "Asia",
    name: "Bangladesh",
    code: "BD",
  },
  {
    region: "Asia",
    name: "India",
    code: "IN",
  },
  {
    region: "Asia",
    name: "Srilanka",
    code: "SL",
  },
  {
    region: "Asia",
    name: "Pakistan",
    code: "PK",
  },
];

let showingTable = "";

for (const country of countries) {
    showingTable += `<tr>
    <td>${country.region}</td>
    <td>${country.name}</td>
    <td>${country.code}</td>
  </tr>`;
  }

// Function defination

function loadData() {
  const tbodyOfTable2 = document.querySelector("#sampleTable2 tbody");
  tbodyOfTable2.innerHTML = showingTable;
}

// Function Call
// loadData();
