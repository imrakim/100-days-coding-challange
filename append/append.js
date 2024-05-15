// let col11 = document.createTextNode("Column 11");
// let col22 = document.createTextNode("Column 22");
// let col33 = document.createTextNode("Column 33");

// function td(txtNode) {
//   let td = document.createElement("TD");
//   td.appendChild(txtNode);

//   return td;
// }

// function tr(tdNode) {
//   let tr = document.createElement("TR");
//   tr.appendChild(tdNode);
//   return tr;
// }

// let td11 = td(col11);
// let td22 = td(col22);
// let td33 = td(col33);

// let trX = tr(td11);
// let tbody = document.querySelector("#sampleTable tbody");
// tbody.appendChild(trX);

// let xS = document.createTextNode("Column 44");
//  td22 = td(col22);
// trX.appendChild(td22);

// let xSx = document.createTextNode("Column 44");
//  td33 = td(col33);
// trX.appendChild(td33);

//Analyze the code below

let columnTexts = ["Column 11", "Column 22", "Column 33", "Column 44"];

function getTextNodeFromText(arrayOfTexts) {
  if (!Array.isArray(arrayOfTexts)) {
    return [];
  }

  let arrayOfTextNodes = [];
  let textNode = "";
  for (let i = 0; i < arrayOfTexts.length; i++) {
    textNode = document.createTextNode(arrayOfTexts[i]);
    arrayOfTextNodes.push(textNode); // preferred
    // columnTextNodes[i] = textNode; // same as lines 6
  }
  return arrayOfTextNodes;
}

let columnTextNodes = getTextNodeFromText(columnTexts);

console.log(columnTextNodes);

columnTexts.forEach(element => {
    console.log(element);
});

// function getTdNodesFromTextNodes(arrayOfTextNodes2) {
//     let arrayOfTdNodes = [];
//     let td = "";
//     for (let i = 0; i < arrayOfTextNodes2.length; i++) {
//         td = document.createElement("td");
//         // arrayOfTdNodes[i] = td.appendChild(arrayOfTextNodes2[i]);
//         arrayOfTdNodes.push(td.appendChild(arrayOfTextNodes2[i]));
//     }
//     return arrayOfTdNodes;
// }

// let columnOfTdNodes = getTdNodesFromTextNodes(columnTextNodes);

// console.log(columnOfTdNodes);
