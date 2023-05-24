require('colors');
const inquirer = require('inquirer');

const Questions = [{
    type: 'list',
    name: 'option',
    message: 'What you gonna do?',
    choices: [{
        value: 1,
        name: '1.- Create task.'
    },
    {
        value: 2,
        name: '2.- List tasks.'
    },
    {
        value: 3,
        name: '3.- Update tasks.'
    },
    {
        value: 4,
        name: '4.- Delete tasks.'
    },
    {
        value: 0,
        name: '0.- Exit.'
    }
    ]
}];

const Pause = [{
    type: 'input',
    name: 'pause',
    message: `Press ${'Enter'.green} to continue!`
}];



const inquirerMenu = async () => {
    console.clear();
    console.log("--------------------".rainbow);
    console.log("Select an option".rainbow);
    console.log("--------------------".rainbow);
    const { option } = await inquirer.prompt(Questions);
    return option;
}

const pause = async () => {
    await inquirer.prompt(Pause)
}

module.exports = {
    inquirerMenu,
    pause
}