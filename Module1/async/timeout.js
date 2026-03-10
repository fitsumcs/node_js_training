
const timeout = 10;
function callback()
{
    console.log("This is SetTime Out");
    console.log("Tesing ....");
}

//SetTimeOut
setTimeout(callback, timeout);

setTimeout(() => {
     console.log("This is arrow function with setimeout")
}, 0);

console.log("This is console , will it print first ?? ");
