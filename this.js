let sum = function ( c, d ){
    console.log(this);
    return this.a + this.b + c + d;
}

let obj = {a:56, b: 67};
let obj2 = {a:6, b: 2};

//let result = sum.apply(obj2, [4, 5]);
/*
 console.log(`result is ${result}`)
*/

let func = sum.bind(obj2, 4, 8);
let result = func();
console.log(`The result is ${result}`);
obj2.a=  90;
obj2.b = 90;
result = func();
console.log(`The result for the second time is ${result}`);