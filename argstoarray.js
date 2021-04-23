function sum(d) {
    console.log("You sent " + d.length + " Paremeters to this function");
}

//We can pass as many params/arguments as we want
/* function fn1(...args){
    return args[0] + args[args.length-1];
}
console.log( fn1(4, 9, 16, 25, 3, 29, 100, 66, 77, 2, 46, 200, 13)); */

/* function fn2(...args){
    return args[0] + args[args.length-1];
}
console.log( fn2("azerty", "qwerty", "atlanta", "VueJS", "Mokhtar", "Morocco", "Web Developement")); */


/* let n = "1" + 0;
console.log(n==10);
console.log(n===10); */

let arr = {'1':'Apple', '2':'Bannana', '3':'Orange'};
let {'1':a, '2':b, '3':c} = arr;
console.log(a, b, c);