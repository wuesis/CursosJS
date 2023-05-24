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


const getEmployee = (id, callback) => {


    let user = users.find(e => e.id === id)

    if (user) {
        callback(null, user)
    } else {
        console.log(`The employee with the id ${id} don't exist`)
    }
};

const getSalary = (id, callback) => {


    let salary = salaries.find(e => e.id === id)

    if (salary) {
        callback(null, salary)
    } else {
        console.log(`The salary with the id ${id} don't exist`)
    }

}


getEmployee(1, (error, usuario) => {

    if (error) {
        console.log(`Error`)
    }  

    getSalary(2, (error, salary) => {

        if (error) {
            console.log(`Error`)
        } else {
            console.log(`The employee ${usuario.nombre} earn ${salary.value} bucks`)
        }
    })
});



