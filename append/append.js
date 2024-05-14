let col11 = document.createTextNode("Column 11");
let col22 = document.createTextNode("Column 22");
let col33 = document.createTextNode("Column 33");

function td(txtNode) {
  let td = document.createElement("TD");
  td.appendChild(txtNode);

  return td;
}

function tr(tdNode) {
  let tr = document.createElement("TR");
  tr.appendChild(tdNode);
  return tr;
}

let td11 = td(col11);
let td22 = td(col22);
let td33 = td(col33);

let trX = tr(td11);
let tbody = document.querySelector("#sampleTable tbody");
tbody.appendChild(trX);

let xS = document.createTextNode("Column 44");
 td22 = td(col22);
trX.appendChild(td22);

let xSx = document.createTextNode("Column 44");
 td33 = td(col33);
trX.appendChild(td33);
