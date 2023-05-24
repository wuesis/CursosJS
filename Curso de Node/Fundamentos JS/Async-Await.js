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


const getUserInfo = async (id) => {

    try {

        const user = await getEmployee(id)
        const salary = await getSalary(user.id)
        return `The employee with id ${user.nombre} earn ${salary.value} pesos`

    } catch (e) {
        throw e
    }
}


getUserInfo(2)
    .then(result => console.log(result))
    .catch(error => console.log(error))

