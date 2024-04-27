let newSmby = Symbol("rakim");
let obj = {
  brand: "samsung",
  model: "S24 ultra",
  camera: ["12MP", "12MP", "12MP Telephoto"],
  processor: "snapdragon 435",
  price: "1300$",
  "what the price": 12,
  "its bollean value": true,
  [newSmby]:"hlw rakim"//use symbol in javascript
};

obj.model = "S25 Ultra";
console.log(obj.model); //change the object key value
console.log(obj["what the price"]);
console.log(obj["its bollean value"]);
// Object.freeze(obj); // you will do not change anything
// obj.brand="xiaomi"
// console.log(obj.brand);
console.log(obj.hasOwnProperty("camera")); 
console.log(obj[newSmby]);
console.log(Object.keys(obj)); //show all keys name
console.log(Object.values(obj));//show all key values




