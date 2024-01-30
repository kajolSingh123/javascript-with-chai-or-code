const name ="kajol"
const age = 27  
 //console.log(name + age );
 //console.log (`my name is ${ name} and my age turend to ${age}`)


 let gameName = new String ("kajol_kumari_singh");

//  console.log(gameName[0]);
//   console.log(gameName.__proto__);
//    console.log(gameName.length);
//     console.log(gameName.toLocaleUpperCase());
//      console.log(gameName.charAt(3));
//       console.log(gameName.indexOf('l'));

const newString = gameName.substring(0,2)
//console.log(newString);

const anotherString = gameName.slice(2, 8)
console.log(anotherString);


const newStringOne = "          kajol  "
console.log (newStringOne);
console.log(newStringOne.trim());

const url = "https://kajol.com/kumari%20singh"
console.log(url.replace('%20','-'))
console.log (url.includes('kajol'))

console.log(gameName.split('_'))