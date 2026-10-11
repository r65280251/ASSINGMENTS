// assingment ---> map, filter & reduce
// -----------Section-1 Map() AND IMMUTABILITY--------
// ----------Q.1-----------
// let arr = ["Mobile", "Laptop", "Tablet", "Desktop"];
// let newArr = arr.map((item) => item.toUpperCase());
// console.log(newArr);
// ----------Q.2-----------
// let arr = ["232", "232.23", "23.23", "23.2", "23"];
// let newArr = arr.map((item) => "₹" + item);
// console.log(newArr);
// ----------Q.3-----------
// let arr = [
//     {
//         name: "Rahul",
//         email:"rahul@example.com",
//     },
//     {
//         name: "Priya",
//         email:"priya@gmail.com"
//     } 
// ]
// console.log(arr.map((person) => 
//     person.name
// ));
// ----------Q.4-----------
// let arr = [100, 200, 300];
// let newArr = arr.map((price) => price * 1.10);
// console.log("Original:", arr);
// newArr = newArr.map((price) => price.toFixed(0));
// console.log("New:", newArr);
// ----------Q.5-----------
// let arr = [
//     {
//         name: "Rahul",
//         role: "student"
//     },
//     {
//         name: "Priya",
//         role: "student"
//     }
// ]
// console.log(arr);
// arr.map((role) =>
// role.role = "developer");
// console.log(arr);
// ----------Q.6-----------
// let arr = [
//     {
//         name: "Laptop",
//         price: 50000
//     },
//     {
//         name: "Mouse",
//         price: 500
//     }
// ]
// console.log(arr);
// arr.map((change) =>
//     change.instock = "true"
// )
// console.log(arr);

// ----------Section-2-------------------
// ----------Q7-------------------
// let arr = ["HTML", "CSS", "Javascript"]
// arr.forEach((naam) => {
//     console.log(naam);
// })
// ----------Q8-------------------
// let arr = ["html", "css", "javascript"]
// const newArr = arr.map((role) => {
//     return role.toUpperCase()
// })
// console.log(newArr);
// ----------Q9-------------------
// let arr = ["Rahul", "Priya", "Aman"]
// let newArr = arr.map((role) => {
//     return role = "User:" + role
// })
// console.log(newArr);
// ----------Section-3-------------------
// ----------Q.10-------------------
// let arr = [
//     {
//         name: "Laptop",
//         inStock: true
//     },
//     {
//         name: "mouse",
//         inStock: false
//     }
// ]
// let newArr = arr.filter(role => {
//     if(role.inStock){
//         return role
//     }
// })
// console.log(newArr);
// ----------Q.11-------------------
// let arr = [
//     { name: "Rahul", role: "developer" },
//     { name: "Priya", role: "student" }
// ]
// let newArr = arr.filter(user => {
//     if(user.role === "developer"){
//         return user
//     }
// })
// console.log(newArr);
// ----------Q.12-------------------
// let arr = [
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1500 }
// ]
// let newArr = arr.filter(user => {
//     if(user.price > 1000)
//         console.log(user);
// })
// console.log(newArr);
// ----------Q.13-------------------
// let arr = [
//     { name: "Rahul", isActive: true },
//     { name: "Priya", isActive: false }
// ]
// let newArr = arr.filter(user => {
//     if(user.isActive)
//         return user
// })
// console.log(newArr);
// ----------Q.14-------------------
// let arr = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"]

// let newArr = arr.filter(user => {
//     return user.includes("@gmail.com")
// })
// console.log(newArr);
// ----------Q.15-------------------
// let arr = [500, 1200, 300] 
// let newArr = arr.reduce((acc , cur) => {
//     return acc + cur
// } , 0)
// console.log(newArr);
// ----------Q.16-------------------
// let arr = ["Laptop", "Mouse", "Keyboard"] 
// let newArr = arr.reduce((acc , cur) => {
//     return  acc + 1;
// } , 0)
// console.log(newArr);
// ----------Q.17-------------------
// let arr = [
//     { name: "Laptop", quantity: 1 },
//     { name: "Mouse", quantity: 2 }
// ]
// let newArr = arr.reduce((acc , cur) => {
//     return acc + cur.quantity
// }, 0)
// console.log(newArr);
// ----------Q.18-------------------
// let arr = [ 
// { amount: 500 }, 
// { amount: 1000 }, 
// { amount: 750 } 
// ] 
// let newArr = arr.reduce((acc , cur) => {
//     return acc + cur.amount
// }, 0)
// console.log(newArr);
// ----------Q.19-------------------
// let arr = ["HTML", "CSS", "JavaScript"]
// let newArr = arr.reduce((acc , cur) => {
//     return acc +", "+ cur 
// })
// console.log(newArr);
// ----------Q.20-------------------
// let arr = [
//     { name: "Mouse", price: 500, quantity: 2 },
//     { name: "Keyboard", price: 1000, quantity: 1 }
// ]
// let newArr = arr.reduce((acc , cur) => {
//     return acc + cur.price * cur.quantity
// }, 0)
// console.log(newArr);


















