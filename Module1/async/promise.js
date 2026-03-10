// How u create a promise 
// const PR = new Promise((resolve, reject) => 
// {
//   //Logic 
//   if(1>2) resolve({})
//   else reject(new Error("This is error "))

// })

const fetchData = () => 
{
return new Promise((resolve, reject) =>
{
setTimeout(() => 
{ 

 const success = false;
 if (success) { resolve({ id: 1, name: 'Alice' }); } 
 else { reject(new Error('Failed to fetch')); } 

}, 1000);

 }); 
};

// This is not sync function 
// U use then / async await
fetchData()
.then(data => 
    {
    console.log("The Data ");
    console.log(data);
    }
)
.catch(err => console.log(err.message));

//How do u change this to Async await






