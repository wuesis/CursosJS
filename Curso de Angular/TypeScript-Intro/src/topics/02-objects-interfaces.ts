const skills: string[] = ['Fuego', ]
skills[1] = '3';

interface character{
    name: string,
    cost: number,
    abilities: string[],
    line?: string
}

const Veigar: character = {
    name: 'Veigar',
    cost: 300,
    abilities: ['PHENOMENAL EVIL POWER', 'BALEFUL STRIKE','DARK MATTER','EVENT HORIZON','PRIMORDIAL BURST'],
    line: 'MID'
    
}



export {skills, Veigar}