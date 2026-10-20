// api data fetch-----
// fetch = ("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => console.log(response))
// .catch(error => console.error(error));

// JS login function---------
// function login() {
// // function login(event)  (form me use k liye)
// // e.preventDefault()  (form me use k liye)

//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   // demo credentials
//   const correctUsername = "imran";
//   const correctPassword = "123";

//   if (username === correctUsername && password === correctPassword) {
//     document.getElementById("message").innerText = "Login Successful";
//   } else {
//     document.getElementById("message").innerText =
//       "Invalid Username or Password";
//   }
// }

// JS signup function---------
// function signup(event) {
//   event.preventDefault(); // page reload rokta hai

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   if (password.length < 6) {
//     document.getElementById("result").innerText =
//       "Password kam se kam 6 characters ka hona chahiye ❌";
//     return;
//   }

//   // user data store (demo)
//   const user = {
//     name,
//     email,
//     password
//   };

//   console.log("User Registered:", user);
//   document.getElementById("result").innerText =
//     "Sign Up Successful ✅";
// }

// data fetching in js------------
// async function fetchData() {
//   try {
//     const response = await fetch("https://dummyjson.com/products");

//     if (!response.ok) {
//       throw new Error("Error fetching data");
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// fetchData();

// data fetching in js with html--------------
// async function getUsers() {
//   try {
//     const response = await fetch("https://dummyjson.com/products");

//     if (!response.ok) {
//       throw new Error("Data fetch failed");
//     }

//     const users = await response.json();
//     console.log(users);
//     const div = document.getElementById("productsInfo");

//      div.innerHTML = `
//       <p><strong>ID:</strong> ${products.id}</p>
//       <p><strong>Name:</strong> ${users.name}</p>
//       <p><strong>Email:</strong> ${users.email}</p>
//       <p><strong>City:</strong> ${users.address.city}</p>
//     `;

//     // const ul = document.getElementById("userList");
//     // ul.innerHTML = ""; // clear old data

//     // users.forEach(user => {
//     //   const li = document.createElement("li");
//     //   li.textContent = `${user.id} - ${user.name}`;
//     //   ul.appendChild(li);
//     // });

//   } catch (error) {
//     console.error("Error:", error);
//   }
// }


// calculator from dom-----------
// function getValues() {
//     let num1 = Number(document.getElementById("num1").value);
//     let num2 = Number(document.getElementById("num2").value);

//     return { num1, num2 };
// }

// function add() {
//     let { num1, num2 } = getValues();
//     document.getElementById("result").textContent = num1 + num2;
// }

// function subtract() {
//     let { num1, num2 } = getValues();
//     document.getElementById("result").textContent = num1 - num2;
// }

// function multiply() {
//     let { num1, num2 } = getValues();
//     document.getElementById("result").textContent = num1 * num2;
// }

// function divide() {
//     let { num1, num2 } = getValues();

//     if (num2 === 0) {
//         document.getElementById("result").textContent = "Cannot divide by 0";
//         return;
//     }

//     document.getElementById("result").textContent = num1 / num2;
// }

    


// calculator from js or dom--------
// const display = document.getElementById("display");

// function appendValue(value) {
//     display.value += value;
// }

// function clearDisplay() {
//     display.value = "";
// }

// function calculate() {
//     try {
//         display.value = eval(display.value);
//     } catch {
//         display.value = "Error";
//     }
// }


// console.log(a);
// let a = 1;

// greet();
// function greet () {
//     console.log('helo');
    
// };

// demo();
// const demo = function () {
//     console.log('helo');
    
// }

// console.log(5==5);
// console.log(5=== '5');

// console.log(eval("2+2"));

// const user = {
//   name: "Imran",
//   show() {
//     console.log(this.name);
//   }
// };

// user.show();

// (function() {
//   console.log("Hello");
// })();

// let a;
// console.log(a);
// let b = null
// console.log(b);

// if (true) {
//     let age = 25;
//     // console.log(age); // 25
// }

// console.log(age); // Error



// let name = "Imran";

// function greet() {
//     console.log(name);
// }

// greet(); // Imran
// console.log(name); // Imran


// function greet() {
//     let message = "Hello";
//     console.log(message);
// }

// greet(); // Hello

// console.log(message); // Error

// shallow-copy---------
// const user1 = {
//   name: "Imran",
//   address: {
//     city: "Delhi"
//   }
// };


// const user2 = { ...user1 }; // Shallow Copy


// user2.address.city = "Mumbai";

    // console.log(user1.address.city); // Mumbai
    // console.log(user2.address.city); // Mumbai
    

// deep-copy--------
// const user1 = {
//   name: "Imran",
//   address: {
//     city: "Delhi"
//   }
// };

// const user2 = structuredClone(user1);

// user2.address.city = "Mumbai";

// console.log(user1.address.city); // Delhi
// console.log(user2.address.city); // Mumbai


// oops---------
// const car = {
//   brand: "Toyota",
//   color: "Black",

//   start() {
//     console.log("Car Started");
//   },

//   run(){
//     console.log('car is running');
//   },
//   stop(){
//     console.log('car stopped');
//   }
// };

// console.log(car.brand);
// car.start();
// car.run();
// car.stop();


// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
    
//     study() {
//         console.log(`${this.name} is studying`);
//     }
// }

// const s1 = new Student("Imran", 22);
// const s2 = new Student("Ali", 21);

// s1.study() 
// s2.study() 


// product list create karna---------
// Agar tum multiple products ko Product List me rakhna chahte ho, to objects ko array me store kar sakte ho.
// class Product {
//     constructor(name, brand) {
//         this.name = name;
//         this.brand = brand;
//     }
// }

// const p1 = new Product("Mobile", "Redmi");
// const p2 = new Product("Laptop", "HP");
// const p3 = new Product("Watch", "Samsung");

// const productList = [p1, p2, p3];

// console.log(productList);


// Direct Array me bhi bana sakte ho
// class Product {
//     constructor(name, brand) {
//         this.name = name;
//         this.brand = brand;
//     }
// }

// const productList = [
//     new Product("Mobile", "Redmi"),
//     new Product("Laptop", "HP"),
//     new Product("Watch", "Samsung")
// ];

// console.log(productList);

// Product List Print Karna
// productList.forEach(product => {
//     console.log(product.name, product.brand);
// });

// Output:

// Mobile Redmi
// Laptop HP
// Watch Samsung


// React me Use Karna
// {productList.map((product, index) => (
//     <div key={index}>
//         <h2>{product.name}</h2>
//         <p>{product.brand}</p>
//     </div>
// ))}

// Ye React me product list render karne ka common tarika hai.



// 10-10-2026---- js classes

// variables banana
// let a = 5;
// let b = 3;
// let c = 'imran'
// console.log(a+b+c);
// console.log(typeof a, typeof b, typeof c);

// object banana
// let user = {
//     name: 'imran',
//     id: 123,
//     age: 30
// }
// console.log(user);

// array banana
// let product = [
//     {name:'mobile', price:10000},
//     {name:'laptop', price:50000},
//     {name:'watch', price:1000},
//     {name:'tv', price:20000}
// ]
// console.log(product[0], product[3]);


// data types in javascript
// numbers
let num1 = 30;
let num2 = 50.39;
// console.log(num2);

// strings
let str1 = "helo world";
let str2 = "helo world helo";
// console.log(str1);

// objects
// const marks = {
//     rahul: 56,
//     neeraj: 70,
//     sonu: 60
// }
// console.log(marks);

// boleans
// let a = true;
// let b = false;
// console.log(a);

// operators in javascript
// arithmetic operators
// let a = 10;
// let b = 2;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

// assignment operators
// let c = b;
// c += 5;
// c -= 5;
// c /= 5;
// console.log(c);

// comparision operators
// let a = 9;
// let b = 5;
// console.log(a == b);
// console.log(a >= b);
// console.log(a <= b);

// logical operators
// logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// logical not
// console.log(!false);
// console.log(!true);

// function avg(a, b){
//     return(a + b)/2;
// }
//  result1 = avg(2, 3)
//  result2 = avg(10, 3)
//  console.log(result1, result2);

// conditionals in javascript
// let age = 18;
// if(age > 18){
//     console.log("you can vote");
// }else{
//     console.log("you cannot vote");
// }

// 7. Positive ya negative
// num = -5 lo. Check karo number positive hai, negative hai, ya zero.
// let num = -1;
// if(num > 0){
//     console.log('positive');
// } else if(num < 0){
//     console.log('negative');
// }else if(num == 0){
//     console.log('zero');
// }


    




















