// assingment --> if & else
// -----------Q.1----------
// let num1 = 144;
// let num2 = 44;
// console.log("addition is" , num1 + num2);
// console.log("Subtraction is" , num1 - num2);
// console.log("division is" , num1 / num2);
// console.log("multiplication is" , num1 * num2);
// ------------Q.2-------------
// let a = 10;
// let b = 20;
// console.log("a = ",a , "b = ",b);
// let c = a;
// b = b;
// console.log("a = ", b , "b = ", c );
// -----------Q.3------
// let hindi = 80;
// let english = 60;
// let math = 70;
// let total = hindi + english + math;
// console.log("Total Marks: ", total);
// let averageMarks = total/3
// console.log("Avg marks",averageMarks );
// let percentage = (total / 300) * 100
// console.log("percentage: ", percentage);
// ------------Q.4-------------
// let productPrice = 999;
// console.log("product-Price : ",productPrice);
// let quantity = 1;
// console.log("Quantity : ",quantity);
// let totalBill = 999;
// console.log("Total-Bill : ",totalBill * quantity);
// let discount = 10 / 100;
// console.log("Discount : 10% ");
// let originalBill = 999;
// console.log("Original-Bill : ",originalBill);
// let discountBill = totalBill * discount;
// console.log("Discount-Bill : ",discountBill );
// let finalBill = discountBill;
// console.log("Final-Bill", finalBill);
// -------------Q.5---------
// let length = 20;
// let breadth = 10;
// console.log("Area of recatngle = ", length*breadth);
// console.log("Perimeter of recatngle = ", 2*(length + breadth));
// ----------------------Section 2----------------------
// -------------Q.6---------
// let a = 50;
// if(a % 2 === 0){
//     console.log("EVEN NUMBER." , a);
// }else{
//     console.log("ODD NUMBER." , a);
// }
// -------------Q.7---------
// let a = -1;
// if(a === 0){
//     console.log(a , "IT IS NEITHER POSITIVE NOR NEGATIVE");
// }else if(a > 0){
//     console.log(a , "POSITIVE NO.");
// }else{
//     console.log(a , "NEGATIVE NO..");
// }
// -------------Q.8---------
// let a = 2;
// let b = 2;
// if (a > b) {
//     console.log(a , "is greater than" , b); 
// }else if (a < b) {
//     console.log(a , "is lesser than" , b);
// }else if(a === b){
//     console.log(a , "is equal to" , b);   
// }else{
//     console.log("NOT a No.");
// }
// --------------Q.9---------------
// let a = 567540
// let c = 96
// let b = 110

// if (a > b && a > c) {
//     console.log(a , "is greater");
// } else if (b > a && b > c) {
//     console.log(b, "is greater");
// } else if (c > a && c > b) {
//     console.log(c, "is greater");   
// }
// --------------Q.10---------------
// let age = 18;
// if(age >= 18){
//     console.log("Eligible to vote");
// }else{
//     console.log("Not Eligible");
// }
// --------------Q.11---------------
// let age = 18;
// let hasLicense = false;
// if(age >= 18 && hasLicense){
//     console.log("It can Drive");
// }else{
//     console.log("it can't drive");
// }
// --------------Q.12---------------
// let num = 50;
// if (num >= 10 && num <=100) {
//     console.log(num, "Number between 10 and 100");
// }else{
//     console.log("Not in between 10 and 100");
// }
// --------------------Section-3 -----------------------
// --------------Q.13---------------
// let percentage = 29;
// if(percentage >= 0 && percentage <=100 ){
// if(percentage >= 90 && percentage <=100){
//     console.log(percentage, "Comes in GRADE ( A )");
// }else if(percentage >= 80 && percentage <= 89){
//     console.log(percentage, "Comes in GRADE ( B )");
// }else if(percentage >= 70 && percentage <= 79){
//     console.log(percentage, "Comes in GRADE ( C )");
// }else if(percentage >= 60 && percentage <= 69){
//     console.log(percentage, "Comes in GRADE ( D )");
// }else if(percentage >= 40 && percentage <= 59){
//     console.log(percentage, "Comes in GRADE ( E )");
// }else if(percentage < 40){
//     console.log(percentage, "Comes in GRADE ( F )");
// }else{
//     console.log("Invalid PERCENTAGE    Caution- Percentage is must in between 0 to 100");
// }}else{
//     console.log("Invalid PERCENTAGE    Caution- Percentage is must in between 0 to 100");
// }
// --------------Q.14---------------
// let Maths = 40;
// let English = 97;
// let Hindi = 92;
// let total = Math + English + Hindi;

// if (Math < 40 || English < 40 || Hindi < 40) {
//     console.log(Maths, "Result : Fail");
//     console.log(English, "Result : Fail");
//     console.log(Hindi, "Result : Fail");
// }
// else {
//     let Avg = total / 3;
//     if (Avg >= 75) {
//         console.log("Distinction");
//     } else if (Avg >= 60) {
//         console.log("First Division");
//     } else if (Avg >= 50) {
//         console.log("Second Division");
//     } else {
//         console.log("Pass");
//     }
// }
// --------------Q.15---------------
// let  unit = 201;
// let bill;
// if(unit <= 100){
//     bill = unit * 5;
// } else if(unit <= 200){
//     bill = unit * 5;
// } else{
//     bill = (100 * 5) + (100 * 5) + ((unit - 200) * 10);
// }
// console.log("bill" , bill);
// --------------Q.16---------------
// let username = "Ritesh";
// let password = 1222;

// if(username === "Ritesh" && password === 1222){
//     console.log("LoginSuccesfully");
// }else{
//     console.log("Login Failed");
// }
// --------------Q.17---------------
// let salary = 50000
// let yearsOfExperience = 2;
// if (yearsOfExperience >= 10) {
//     console.log("Original-Salary : ", salary);
//     console.log("bonus-Calculated : ",(salary * 20) / 100)
//     let cal1 = (salary * 20) / 100;
//     console.log("Total-Salary : ", salary + cal1);;
// }else if (yearsOfExperience >= 5 && yearsOfExperience < 10) {
//     console.log("Original-Salary : ", salary);
//     console.log("bonus-Calculated : ", (salary * 10) / 100)
//     let cal2 = (salary * 10) / 100;
//     console.log("Total-Salary : ", salary + cal2);;
// }else if (yearsOfExperience >= 2 && yearsOfExperience < 5) {
//     console.log("Original-Salary : ", salary);
//     console.log("bonus-Calculated : ", (salary * 5) / 100)
//     let cal3 = (salary * 5) / 100;
//     console.log("Total-Salary : ", salary + cal3);;
// }else if (yearsOfExperience < 2) {
//     console.log("Original-Salary : ", salary);
//     console.log("Salary : ", salary);
// }
// --------------Q.18---------------
// let age = 70;
// if(age > 0 && age <= 12){
//     console.log(age, "Comes in child");
// } else if(age > 12 && age <= 19){
//     console.log(age, "Comes in Teenager");
// } else if(age > 19 && age <= 59){
//     console.log(age, "Comes in Adult");
// } else if(age > 59){
//     console.log(age, "Comes in Senior-Citizen");
// }
// ----------------------  Section-4  -----------------
// --------------Q.19---------------
// let day = 1;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }
// --------------Q.20---------------
// let num1 = 2;
// let num2 = 2;
// let ope = "*";
// if(ope === "+"){
//     console.log(num1+num2);
// }else if(ope === "-"){
//      console.log(num1-num2);   
// }else if(ope === "*"){
//      console.log(num1*num2);   
// }else if(ope === "/"){
//      console.log(num1/num2);   
// }else if(ope === "%"){
//      console.log(num1%num2);   
// }else{
//     console.log("Error");
// }
// --------------Q.21---------------
// let month = 13;
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("JULY");
//         break;
//     case 8:
//         console.log("aUGUST");
//         break;
//     case 9:
//         console.log("september");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("Invalid Month");
//         break;
// }
// --------------Q.22----------------
// let num1 = 1;
// let num2 = 2;
// let choice = 1
// switch (choice) {
//     case 1:
//         console.log("Addition", num1 + num2);
//         break;
//     case 2:
//         console.log("Subtraction", num1 - num2);
//         break;
//     case 3:
//         console.log("Multiplication", num1 * num2);
//         break;
//     case 4:
//         console.log("Division", num1 / num2);
//         break;
//     case 5:
//         console.log("Modulus", num1 % num2);
//         break;

//     default:
//         console.log("Invalid choice");
// }
// --------------Q.23----------------
// let lightColor = "red";
// switch (lightColor) {
//     case "red":
//         console.log("red-Light ," ,"Stop" );
//         break;
//     case "yellow":
//         console.log("yellow-Light ," ,"Wait" );
//         break;
//     case "green":
//         console.log("Green-Light ," ,"Go" );
//         break;
//     default:
//         console.log("Invalid Signal");
//         break;
// }
// --------------------Section-5----------------
// --------------Q.24----------------
// let balance = 1000000;
// let withdrawAmount = 10000;
// if(balance >= withdrawAmount){
//     console.log("Balance", balance);
//     console.log("With-draw-Amount", withdrawAmount);
//     console.log("Remaining Balance :",balance - withdrawAmount);
// }else{
//     console.log("ERROR");
// }
// --------------Q.25----------------
// let age = 94;
// let ticketPrice1 = 100
// let ticketPrice2 = 200
// let ticketPrice3 = 120
// if(age < 12){
//     console.log("Price for this age group : " , age * ticketPrice1);
// }else if(age >=12 && age <= 59){
//     console.log("Price for this age group : " , age * ticketPrice2);
// }else if(age >= 60){
//     console.log("Price for this age group : " , age * ticketPrice3);
// }else{
//     console.log("ERROR");
// }
// --------------Q.26----------------
// let burgerPrice = 150;
// let pizzaPrice = 250;
// let pastaPrice = 180;
// let sandwichPrice = 120;
// let choice = 4;
// let quantity = 4;
// switch (choice) {
//     case 1:
//         console.log("Choice: 1");
//         console.log("Quantity: ", quantity);
//         console.log("Total: ",quantity*burgerPrice);
//         break;
//     case 2:
//         console.log("Choice: 2");
//         console.log("Quantity: ", quantity);
//         console.log("Total: ",quantity*pizzaPrice);
//         break;
//     case 3:
//         console.log("Choice: 3");
//         console.log("Quantity: ", quantity);
//         console.log("Total: ",quantity*pastaPrice);
//         break;
//     case 4:
//         console.log("Choice: 4");
//         console.log("Quantity: ", quantity);
//         console.log("Total: ",quantity*sandwichPrice);
//         break;
//     default:
//         console.log("Not in Menu !!");
//         break;
// }
// --------------Q.27----------------
// let unit = 102;
// let bill1 = 5;
// let bill2 = 7;
// let bill3 = 10;
// let discountRate = 10 / 100;
// if (unit < 0) {
//     console.log("Error!!");
// } else if (unit >= 0 && unit <= 100) {
//     let originalBill = unit * bill1;
//     console.log("Units: ", unit);
//     console.log("Original-Bill: ", originalBill);
//     console.log("Discount: ", "No-Discount");
//     console.log("Final-Bill: ", originalBill);
// } else if (unit >= 101 && unit <= 200) {
//     let originalBill = unit * bill2;
//     console.log("Units: ", unit);
//     console.log("Original-Bill: ", originalBill);
//     console.log("Discount: ", "No-Discount");
//     console.log("Final-Bill: ", originalBill);
// } else if (unit > 200 && unit < 2000) {
//     let originalBill = unit * bill3;
//     console.log("Units: ", unit);
//     console.log("Original-Bill: ", originalBill);
//     console.log("Discount: ", "No-Discount");
//     console.log("Final-Bill: ", originalBill);
// } else if (unit >= 2000) {
//     let originalBill = unit * bill3;
//     let finalBill = originalBill - (originalBill * discountRate);
//     console.log("Units: ", unit);
//     console.log("Original-Bill: ", originalBill);
//     console.log("Discount: ", "10%");
//     console.log("Final-Bill: ", finalBill);
// }
// --------------Q.28----------------
// let checkBalance = 2000;
// let depositMoney = 1000;
// let withdrawMoney = 200;
// let Exit = "Thanyou for Visiting!! Goodbye";
// let choice = 2
// switch (choice) {
//     case 1:
//         console.log("Current-Balance: ", checkBalance);
//         break;
//     case 2:
//         console.log("Current-Balance: ", checkBalance);
//         console.log("Deposit : ",depositMoney );
//         console.log("Total-Money : ",depositMoney + checkBalance);
//         break;
//     case 3:
//         console.log("Current-Balance: ", checkBalance);
//         console.log("withdraw-Money: ", withdrawMoney);
//           console.log("Total-Money : ",checkBalance -withdrawMoney );
//         break;
//     case 4:
//         console.log(Exit);
//         break;

//     default:
//         console.log("Error!!");
//         break;
// }
// --------------Q.29----------------
// let num = 101;
// let result = num % 2;

// if (num < 0 && result === 0) {
//     console.log(num);
//     console.log("Negative no.");
//     console.log("Even.no");
// } else if (num < 0 && result !== 0) {
//     console.log(num);
//     console.log("Negative no.");
//     console.log("Odd.no");
// } else if (num === 0) {
//     console.log(num);
//     console.log("Neither Positive or Negative");
// } else if (num > 0 && num > 100 && result === 0) {
//     console.log(num);
//     console.log("Positive no.");
//     console.log("Even.no");
//     console.log("Greater than 100");
// } else if (num > 0 && num < 100 && result !== 0) {
//     console.log(num);
//     console.log("Positive no.");
//     console.log("Odd.no");
//     console.log("Less than 100");
// } else if (num === 100 && result === 0) {
//     console.log(num);
//     console.log("Even.no");
//     console.log("Equal to 100");
// } else if (num > 0 && num > 100 && result !== 0) {
//     console.log(num);
//     console.log("Positive no.");
//     console.log("Odd.no");
//     console.log("Greater than 100");
// } else {
//     console.log("Error!!");
// }
// --------------Q.30----------------
// let studentName = "Rahul";
// let rollNumber = 20;
// let mathMarks = 30;
// let scienceMarks = 71;
// let englishMarks = 79;
// let percentage = (mathMarks + scienceMarks + englishMarks)/3;
// console.log("Name      :",studentName);
// console.log("Rol no.   :",rollNumber );
// console.log("Math      :",mathMarks);
// console.log("Science   :",scienceMarks);
// console.log("English   :",englishMarks);
// console.log("Total     :",englishMarks + scienceMarks + mathMarks);
// console.log("Percentage:",percentage);
// if(mathMarks >= 90 || mathMarks < 100 && scienceMarks >= 90 || scienceMarks < 100 && englishMarks >= 90 || englishMarks < 100 ){
//     console.log("grade :","A");
//     console.log("Result: ", "PASS");
// }else if(mathMarks >= 80 || mathMarks < 89 && scienceMarks >= 80 || scienceMarks < 89 && englishMarks >= 80 || englishMarks < 89 ){
//     console.log("grade :","B");
//     console.log("Result: ", "PASS");
// }else if(mathMarks >= 70 || mathMarks < 79 && scienceMarks >= 70 || scienceMarks < 79 && englishMarks >= 70 || englishMarks < 79 ){
//     console.log("grade :","C");
//     console.log("Result: ", "PASS");
// }else if(mathMarks >= 60 || mathMarks < 69 && scienceMarks >= 60 || scienceMarks < 69 && englishMarks >= 60 || englishMarks < 60 ){
//     console.log("grade :","D");
//     console.log("Result: ", "PASS");
// }else if(mathMarks >= 40 || mathMarks < 59 && scienceMarks >= 40 || scienceMarks < 59 && englishMarks >= 40 || englishMarks < 59 ){
//     console.log("grade :","E");
//     console.log("Result: ", "PASS");
// }else if(mathMarks < 40 && scienceMarks < 40 && englishMarks < 40){
//     console.log("grade :","F");
//     console.log("Result: ", "FAIL");
// }else{
//     console.log("Error!");
// }






























































