let sum =  (a, b) => a + b;


let sub =  (a, b)  =>  a - b;


let product = (a, b) => a * b;


let division =  (a, b) => a / b;

let math =  (fun, a , b ) =>  fun(a , b);


//let result = sum (45,22);
//console.log (`The result is  ${result}`);

let mod = function (a, b ){
    return a % b;
}

let result = math( (a, b )=> a + b , 15, 5);

console.log (`The result is ${result}`)