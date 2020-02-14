const employees = [
    {
        id:1,
        name:'Kabir',
        salary:45000
    },
    {
        id:2,
        name:'Kishore',
        salary:25000
    },
    {
        id:3,
        name:'Harish',
        salary:55000
    },
    {
        id:4,
        name:'Anand',
        salary:59000
    },
    {
        id:5,
        name:'Usha',
        salary:95000
    },
    {
        id:6,
        name:'Kiran',
        salary:25000
    },
    {
        id:7,
        name:'Vinay',
        salary:75000
    },
    {
        id:8,
        name:'Khushi',
        salary:69000
    }
]


employees
    .filter( employee => employee.salary > 50000 && employee.salary < 100000)
    .map(employee => employee.name)
    .forEach(name => console.log(`${name}`));