let ages = [12, 34, 56, 67,89,90, 45];

let ageLt15 = function (age){
    return age < 15;
}

let ageGt60 = function (age){
    return age > 60 ;
}

let ageGt18 = ages.filter(ageGt60);

let print = function (age){
    console.log(age);
}

let square = function(age){
    return age * age
}


let squaredItems = ages.map(square)
//squaredItems.forEach(print);

ages.filter(age => age < 40).map(square).forEach(print)