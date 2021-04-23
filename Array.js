//Most important Array Methodes




//Push : Adds a new item to the array at the end
let l = ["Bannana", "Apple", "Orange", "Kiwi"];
//l.push('Pinapple');
//console.log(l); => [ 'Bannana', 'Apple', 'Orange', 'Kiwi', 'Pinapple' ]

// Pop : Removes the last item from the array
//l.pop();
//console.log(l); => [ 'Bannana', 'Apple', 'Orange' ]

// Shift : Removes the first item from the array
//l.shift();
//console.log(l); => [ 'Apple', 'Orange', 'Kiwi' ]

// Unshift : Adds a new item at the start of the array and returns the new length of it
//let c = l.unshift('Pinapple');
//console.log(c,l); => 5 [ 'Pinapple', 'Bannana', 'Apple', 'Orange', 'Kiwi' ]

// Slice : Returns a part of the array that starts with the first index and ends with the second
//let c = l.slice(1, 3);
//console.log(c); => [ 'Apple', 'Orange' ]

// Splice : removes number of items from the array from the index passed and return the deleted items
//let c = l.splice(1,2);
//console.log(c, l); => [ 'Apple', 'Orange' ] [ 'Bannana', 'Kiwi' ]

// Length : return the length of the array
//let c = l.length;
//console.log(c); => 4

// indexOf : returns the index of the first item that match with the parameter
//let c = l.indexOf('Bannana');
//console.log(c); => 0

// Map (ES6) : execute the callback funclion to every item in the array and return the result
//let c = l.map(r => r += '2');
//console.log(c); => [ 'Bannana2', 'Apple2', 'Orange2', 'Kiwi2' ]

// Filter (ES6) : checks if any item matched with the callback function and returns it if found
//let c = l.filter(f => f.length > 4);
//console.log(c); => [ 'Bannana', 'Apple', 'Orange' ]

// Reduce (ES6) : executes an operation using the array items and returns the result
//let c = l.reduce((current, newVal) => current + newVal);
//console.log(c); //BannanaAppleOrangeKiwi

// forEach (ES6) : Adds a new item to the array at the end of it
// let c = [];
// l.forEach(v => c.push(v.slice(0,3)));
// console.log(c); => [ 'Ban', 'App', 'Ora', 'Kiw' ]

// Includes : checks if the string passed as param matches one of the array's items
// let c = l.includes("Dragon Fruit");
// console.log(c); => false

// isArray : checks if the param passed is an array or not
// let c = Array.isArray(l);
// console.log(c); => true

// Join : adds all items of the array into a string separated with the string passed as parameter and returns the string as result
// let c = l.join(' ');
// console.log(c); => Bannana Apple Orange Kiwi

// Reverse : reverse the items's order in the array itself (the original array)
// let c = l.reverse();
// console.log(c); => [ 'Kiwi', 'Orange', 'Apple', 'Bannana' ]
// console.log(l); => [ 'Kiwi', 'Orange', 'Apple', 'Bannana' ]

// lastIndexOf : returns the index of the last item found that matchs with the param passed (Case sensitive)
// let c = l.lastIndexOf('Apple');
// console.log(c); => 1

// Find : returns the first element that matched with the function passed as param
// let c = l.find(e => e.length <= 5)
// console.log(c); => Apple

// Filter : similar to find but in this case it return an array of all found items
// let c = l.filter(e => e.length <= 5)
// console.log(c); => [ 'Apple', 'Kiwi' ]

// Concat : combine multiple array in one result array
// let c = l.concat(['Dragon Fruit', 'Pineapple', 'Grapes'])
// console.log(c); => ['Bannana','Apple','Orange','Kiwi','Dragon Fruit','Pineapple','Grapes']

// Sort : sort the array in alphanumerical order
// l.sort()
// console.log(l); => [ 'Apple', 'Bannana', 'Kiwi', 'Orange' ]
// let c = [1,'zineb',7,2,'Mokhtar',9,8]
// c.sort()
// console.log(c); => [ 1, 2, 7, 8, 9, 'Mokhtar', 'zineb' ]


// Values : creates a single use iterator for all the items in the array
// let c = l.values()
// for(i of c){
//     console.log(i);
// }
// Bannana
// Apple
// Orange
// Kiwi


// Keys
// let c = l.keys()
// for(i of c){
//     console.log(i);
// }
// 0
// 1
// 2
// 3