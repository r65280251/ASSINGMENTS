// assingments --> OBJECTS
//---------Q.1-------------
// let obj = {
//     name: "Rahul",
//     email: "rahul@example.com",
//     role: "developer"
// }
// console.log(obj);
//---------Q.2-------------
// let obj = {
//     name: "Laptop",
//     price: 50000,
//     category: "Electronics"
// };
// console.log(obj.name, obj.price);
//---------Q.3-------------
// let obj = {
//     name: "Rahul",
//     email: "rahul@example.com"
// };
// console.log(obj.email);
//---------Q.4-------------
// let obj = {
//     name: "Rahul",
//     email: "rahul@example.com"
// };
// let value = obj.name;
// console.log(value);
//---------Q.5-------------
// let obj = {
//     name: "Rahul",
//     role: "student"
// }
// obj.role = "developer"
// console.log(obj);
//---------Q.6-------------
// let obj = {
//     name: "Rahul",
//     email: "rahul@example.com"
// }
// obj.isLoggedIn = true;
// console.log(obj);
//---------Q.7-------------
// let obj = {
//     name: "Rahul",
//     email: "rahul@example.com",
//     role: "developer"
// };
// console.log(Object.keys(obj));
//---------Q.8-------------
// let obj = {
//     name: "Laptop",
//     price: 50000,
//     category: "Electronics"
// };
// console.log(Object.values(obj));
//---------Q.9-------------
// let obj = {
//     theme: "dark",
//     language: "English",
//     notifications: true
// };
// console.log(Object.entries(obj));
//---------Q.10-------------
// let obj = {
//     name: "Rahul",
//     email: "rahul@example.com"
// };
// Object.entries(obj).forEach(user => {
//     console.log(user);
// });
//---------Q.11-------------
// let obj = {
//     name: "Rahul",
//     email: "rahul@example.com",
//     role: "developer"
// };
// let user = obj.name
// let email = obj.email
// console.log(user);
// console.log(email);
//---------Q.12-------------
// let obj = {
//     name: "Laptop",
//     price: 50000
// };
// let detail =`productName = ${obj.name}`
// console.log(detail);
//---------Q.13-------------
// const name = "Rahul";
// const email = "rahul@example.com";
// const role = "developer";
// const user = {name, email, role}
// console.log(user);
//---------Q.14-------------
// function displayUser(name , email){
//     console.log(name);
//     console.log(email);
// }
// displayUser("Rahul", "Rahul@gmail.com")
//---------Q.15-------------
// let obj = {
//     name: "Rahul",
//     role: "developer"
// };
// const newUser = {...obj}
// console.log(newUser);
//---------Q.16-------------
// let obj = {
//     name: "Rahul",
//     role: "student"
// };
// let newObj = {...obj}
// newObj.role = "developer"
// console.log(newObj);
//---------Q.17-------------
// const frontend = ["HTML", "CSS", "JavaScript"]; 
// const backend = ["Node.js", "Express"]; 
// let server = [...frontend , ...backend]
// console.log(server);
//---------Q.18-------------
function showSkills(name , skills) {
    console.log(name);
    console.log(skills);
    
}
let a = "HTML" + ", " + "CSS" + ", " + "JavaScript"
showSkills("Rahul", a )