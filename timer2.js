const readline = require('readline');
const { SIGINT } = require('constants');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Type b or a number CTRL+C to exit > '
});

rl.question('Type b or a number CTRL+C to exit > ', (userInput) => {
  if (userInput == 'b') {
    process.stdout.write('\n\n --BEEEP--\n');
    process.stdout.write('\x07');
    rl.prompt();
  }
  else if (userInput >= 1 && userInput <= 9) {
    process.stdout.write(`setting timer for ${userInput} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\n\n --BEEEP--\n');
      process.stdout.write('\x07');
      rl.prompt();
    }, userInput * 1000);
  }
  else if (userInput !== SIGINT)
    rl.prompt();
  rl.on('line', (userInput) => {
    if (userInput === SIGINT)
      rl.close();
    else {
      if (userInput === 'b') {
        process.stdout.write('\n\n --BEEEP--\n');
        process.stdout.write('\x07')
        rl.prompt();
      }
      else if (userInput >= 1 && userInput <= 9) {

        process.stdout.write(`setting timer for ${userInput} seconds...\n`);
        setTimeout(() => {
          process.stdout.write('\n\n --BEEEP--\n');
          process.stdout.write('\x07')
          rl.prompt();
        }, userInput * 1000);
      }
      else if (userInput !== SIGINT)
        rl.prompt();

    }
  })
});

rl.on('close', () => {
  console.log('Thanks for using me, ciao!')
});