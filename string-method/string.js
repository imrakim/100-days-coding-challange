const str = " I'm Rakim Ali";
let check = str.length;
let char = str.charCodeAt(0);
console.log(char);

let ra = "abcdef";
const rss = ra.charAt(5);
console.log(rss);

let wht = "Im Rakim Ali";
const ttt = wht.substring(3, 8); // slice() sunstring()  same methods in js.
console.log(ttt);


let sta = "Im Rakim Ali";
const star = sta.trimEnd();  // frist to last index string or number anything
console.log(star);

let num = "7";
let formattedNum = num.padStart(2, '0'); // "007"  there nothing i understand.
console.log(formattedNum);



// string search  indexOf
let text = " hlw My  is Rakim"
let result = text.indexOf("name");
console.log(result);

// lastindexOf
let last = " hlw how's going Your Day Day Day";
let show =  last.lastIndexOf("Day");
console.log(show);