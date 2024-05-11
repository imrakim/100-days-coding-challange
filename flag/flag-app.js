let emty ="";
fetch("https://restcountries.com/v3.1/all")
.then((data) => data.json())
.then((datax)=> {
    for (const x of datax) {
        emty += `<div>
        <h1>"${x.common}"</h1>
        <img src="${x.flags.png}">
        </div>`
    }
    const flag = document.querySelector("#flag");
    flag.innerHTML= emty;
})