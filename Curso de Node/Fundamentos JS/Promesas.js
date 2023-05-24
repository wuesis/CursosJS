const users = [
    {
        id: 1,
        nombre: "Victor",
    },
    {
        id: 2,
        nombre: "Itsvan",
    },
    {
        id: 3,
        nombre: "Jose",
    },
    {
        id: 4,
        nombre: "Linda",
    },
]

const salaries = [
    {
        id: 1,
        value: 1200
    },
    {
        id: 2,
        value: 1500
    },
    {
        id: 3,
        value: 2000
    },
]


const getEmployee = id => {

    let user = users.find(e => e.id === id);

    return new Promise((resolve, reject) => {
        (user)
            ? resolve(user)
            : reject(`The employee with the id ${id} don't exist`)
    })
};


const getSalary = id => {

    let salary = salaries.find(e => e.id === id);

    return new Promise((resolve, reject) => {

        (salary)
            ? resolve(salary)
            : reject(`There isn't a salary for the employee id ${id}`)

    })
}

let nombre;
let id = 4
getEmployee(id)
    .then(employee => {
        nombre = employee.nombre
        return getSalary(id)
    })
    .then(salary => console.log(`El empleado ${nombre} tiene un salario de ${salary.value}`))
    .catch(error => console.log(error));


// getEmployee(4)
//     .then(users => {
//         getSalary(users.id)
//             .then( salary => console.log(`El empleado ${users.nombre} tiene un salario de ${salary.value}`))
//             .catch(error => console.log(error))
//     })
//     .catch(error => console.log(error))

// getEmployee(2)
//     .then(user => console.log(user.nombre))
//     .catch(error => console.log(error))


// getSalary(2)
//     .then(salary => console.log(salary.value))
//     .catch(error => console.log(error))
