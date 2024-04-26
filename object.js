let obj = {
    brand : "samsung",
    model : "S24 ultra",
    camera: ["12MP","12MP","12MP Telephoto"],
    processor: "snapdragon 435",
    price : "1300$",
    "what the price": 12,
    "its bollean value":true,
}

obj.model="S25 Ultra"
console.log(obj.model); //change the object key value
console.log(obj["what the price"]);
console.log(obj["its bollean value"]);
// Object.freeze(obj); // you will do not change anything
// obj.brand="xiaomi"
// console.log(obj.brand);
console.log(obj.hasOwnProperty("camera"));


// how to use symbolol in javascript

let newSmby=Symbol("rakim")
let key={
    [newSmby]: "hello rakim"
}

console.log(key[newSmby]);