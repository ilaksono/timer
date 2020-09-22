const timer = (a) => {
  let args = process.argv.slice(2);
  console.log(process.argv);
  for (let a of args) {
    console.log(a);
    if(Number(a) > 0 && !Number.isNaN(Number(a))) 
      setTimeout(() => process.stdout.write('\x07'), 1000 * a);
  }
}

module.exports = timer;
timer();