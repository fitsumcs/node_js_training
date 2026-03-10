 // Sync
console.log('1'); 

//Async Macrotask
setTimeout(() => {  console.log('2'); }, 0); 

//Async Microtask [Priority over Macro]
Promise.resolve().then(() => { console.log('3');  }); 

// Sync
console.log('4');