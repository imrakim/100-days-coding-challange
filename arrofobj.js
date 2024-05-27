let products = [
  {
    id: "rakim0",
    name: "Rakim",
    age: 21,
    class: 10,
    "school name": "Sirajuddin Sarker viddyniketan and collage",
  },
  {
    id: "rahim1",
    name: "Rahim",
    age: 20,
    class: 10,
    "school name": "Sirajuddin Sarker viddyniketan and collage",
  },
  {
    id: "rafi2",
    name: "Rafi",
    age: 22,
    class: 10,
    "school name": "Sirajuddin Sarker viddyniketan and collage",
  },
  {
    id: "ratul3",
    name: "Ratul",
    age: 23,
    class: 10,
    "school name": "Sirajuddin Sarker viddyniketan and collage",
    list: [
      {
        name: "rakim",
        roll: 12,
        class: 11,
        "collage name": "Uttara High School and college",
      },
    ],
  },
];

const search = "ratul3";

for (let i = 0; i < products.length; i++) {
  let product = products[i];
  if (product.id === search) {
    console.log(product);
  }
}
