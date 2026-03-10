//List
export const listofItems = ["Apple", "Orange", "PinApple"];
export const listOfNumbersOne = [1,2,3,4,5]
export const listOfNumbersTwo = [6,7,8,9,10]

//User Data
export const userData = {
   
    firsName : "Abebe",
    lastName : "Kebede",
    age: 45
}

export const userData2 = {
   
    firsName : "Kebede",
    lastName : "Abebe",
    age: 24
}

//Oder Mock 
export const foodOrder = {
      name : "Shero",
      orderNumber: 12,
      date: "",
      hotel: "Mr x",
      price: 20,
      currency: "ETB"
}

export const foodOrder2 = {
      name : "Beyanet",
      orderNumber: 13,
      date: "",
      hotel: "Mr y",
      price: 40,
      currency: "ETB"
}

export const post1 = {
    title : "Title of Post1",
    body : "Text Body1",
    createdAt: Date.UTC
}
export const post2 = {
    title : "Title of Post1",
    body : "Text Body1",
    createdAt: Date.UTC
}

export const notfication1 ={
    title: "Notification Title1",
    body: "Notification Body1",
    Icon: "Icon"
} 
export const notfication2 ={
    title: "Notification Title2",
    body: "Notification Body2",
    Icon: "Icon2"
}

export const orders = [foodOrder, foodOrder2];
export const users =[userData, userData2];
export const posts =[post1, post2];
export const notifications = [notfication1,notfication2];

export function testObjectAndArray()
{
    //Print data
    console.log("List of items: ", listofItems);
    console.log("User Data : ", userData);
}

