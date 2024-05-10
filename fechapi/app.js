

function loadData(){
   let URL = 'https://cat-fact.herokuapp.com/facts';

   let promise = fetch (URL);
    let getFects = async () => {
       console.log("getting data");
       let responce = await fetch(URL);
       console.log(responce);
       let data = await responce.json();
       console.log(data);
    }
   console.log(promise);
document.querySelector =data;   
}