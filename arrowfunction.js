//const arrowfunc = (x, y) => "The result is : " + x * y;


//Arrow function was created to solve the problem of 'this' keyword that sometimes refer to other scope. 

//Function returns undefined when we use the {}
// const fn1 = () => {'Hello World'};
// console.log(fn1());

//Function returns Hello World
// const fn2 = () => 'Hello World';
// console.log(fn2());

//Function passing one param
// const fn3 = w => `Hello ${w}`; 
// console.log(fn3('World'));

//Function returns Hello World
// const fn4 = () => { return 'Hello World' };
// console.log(fn4());

//Function passing two params
// const fn5 = (w, z) => `${w} ${z}`; 
// console.log(fn5('Hello','World'));

// function fn1() { => returns the object called from
//     console.log(this);
// }
// let fn2 = () => console.log(this); => returns always the window object