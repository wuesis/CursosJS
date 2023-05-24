require('colors');
// const { showMenu, pausa } = require('./Helpers/Messages');
const { pause, inquirerMenu } = require('./Helpers/inquirer')

const main = async () => {
  let value;
  try {
    do {
      value = await inquirerMenu();
      console.log({value});
      await pause();
    } while (value != 0);
  } catch (e) {
    console.Console(e);
  }
}

main()