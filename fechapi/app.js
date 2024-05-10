let URL = "https://cat-fact.herokuapp.com/facts";


const fact = document.querySelector("#fact")

let promise = fetch(URL);
let getFacts = async () => {
  console.log("getting data");
  let responce = await fetch(URL);
  console.log(responce);
  let data = await responce.json();
  console.log(data);
  fact.innerHTML = data[0].text
};
 addEventListener("click",getFacts)