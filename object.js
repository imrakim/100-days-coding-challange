let obj = {
    brand : "samsung",
    model : "S24 ultra",
    camera: ["12MP","12MP","12MP Telephoto"],
    processor: "snapdragon 435",
    price : "1300$",
    "what the price": 12,
    "its bollean value":true,
}

console.log(obj["what the price"]);
console.log(obj["its bollean value"]);


// how to use symbolol in javascript

let newSmby=Symbol("rakim")
let key={
    [newSmby]: "hello rakim"
}

console.log(key[newSmby]);