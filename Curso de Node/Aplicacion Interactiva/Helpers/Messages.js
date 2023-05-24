require("colors")


const showMenu = () => {

    return new Promise(resolve => {

        console.clear();
        console.log("--------------------".rainbow)
        console.log("Select an option".rainbow)
        console.log("--------------------".rainbow)
        console.log(`1. Add a task`.rainbow)
        console.log(`2. List tasks`.rainbow)
        console.log(`3. Complete tasks`.rainbow)
        console.log(`4. Delete tasks`.rainbow)
        console.log(`5. Exit\n`.rainbow)

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Select an option: ', (option) => {
            readLine.close();
            resolve(option);
        })
    });

}

const pausa = () => {

    return new Promise(resolve => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`Presione ${'Enter'.green} para continuar`, option => {
            readLine.close();
            resolve();
        })

    })
}


module.exports = {
    showMenu,
    pausa
}