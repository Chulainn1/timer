
const args = process.argv.slice(2).filter(arg => typeof arg !== "number" && arg > -1);
console.log(args);
for (let i = 0; i < args.length; i++) {
  setTimeout(function() {
    process.stdout.write('\x07');
      
  },(args[i] * 1000));
}









