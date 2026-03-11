// event-loop-demo.js
console.log('1. Start');    //Sync 
setTimeout(() => { console.log('2. setTimeout'); }, 0);        //Macro -Timer
setImmediate(() => { console.log('3. setImmediate'); });       //Macro - Check
Promise.resolve().then(() => { console.log('4. Promise'); });  // Micro
process.nextTick(() => { console.log('5. nextTick'); });       //Micro
console.log('6. End');    // Sync 
