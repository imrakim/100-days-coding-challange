let obj = [
    {
        name: "Rakim",
        age : 21,
        class: 10,
        "school name": "Sirajuddin Sarker viddyniketan and collage"
    },
    {
        name: "Rahim",
        age : 20,
        class: 10,
        "school name": "Sirajuddin Sarker viddyniketan and collage"
    },
    {
        name: "Rafi",
        age : 22,
        class: 10,
        "school name": "Sirajuddin Sarker viddyniketan and collage"
    },
    {
        name: "Ratul",
        age : 23,
        class: 10,
        "school name": "Sirajuddin Sarker viddyniketan and collage",
        list:[
            {
                name: 'rakim',
                roll: 12,
                class:11,
                "collage name":'Uttara High School and college'
            }
        ]
    }
];

console.log(obj[3].list[0].name);