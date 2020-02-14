let car = {
    make:'Baleno',
    type:'petrol',
    'reg-no':'MH08-5655',
    model: 2019,
    owner:{
        name:'Prashant',
        city:'Noida',
        zip_code:54554
    },
    printCarDetails: function(){
        return `Reg No: ${this['reg-no']} Make: ${this.make}, Model: ${this.model} and belongs to ${this.owner.name}`;
    }
};

console.log (`Make of the car is ${car['make']}`)
console.log(car.printCarDetails())
