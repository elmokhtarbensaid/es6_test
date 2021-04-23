//Most important String Methodes

let a = "El Mokhtar lives at " + 1627 + " bussell pl Mokhtar ";
let b = "Norcross";
var c;

// Concat : return a new String as combination of both strings (a and b)
c = a.concat(b);

// Slice : return a new String that start from the index (1st param) to the index (2nd param)
//console.log(c.slice(3,10));

// Replace : return new String with the 1st param replaced with the 2nd param
//console.log(c.replace('lives', 'works'));

// Search : return the first index of the searched string if found
//console.log('Search : ' + c.search('tar'));

// toString : parse any value to a string and return it
// let d = new String(c);
// console.log(d, d.toString());

// Trim : return the String with no spaces on the both sides
//console.log(c.trim());

// Length : return the length of the given string
//console.log(c.length);

// Substr : Similar to Slice but the secend param is number of caracters of the new String returned
//console.log(c.substr(3,7));

// Split
//console.log(c.split(' '));

// indexOf : return the index of the string given starting from the index in the 2nd param (0 if not defined)
//console.log('indexOf : ' + c.indexOf('tar',8));

// charAt : return the caracter at the index given
//console.log(c.charAt(3));

// includes : return true if the param if found as is(Case sensitive) in the string and false if not, the 2nd param is the position of the start index
//console.log(c.includes('mokh'));//false
//console.log(c.includes('Mok'));//true

// toUppercase : convert the param given to a string in the uppercase format
//console.log(c.toUpperCase());

// lastIndexOf : returns the last index of the string passed as parameter
//console.log(c.lastIndexOf('Mokhtar'));

// endWith : returns true if the string ends with the parameter and false if not
//console.log(c,c.endsWith('oss'));//true

// Match
// matchAll

//returns true if the String matche with the regular expression given

