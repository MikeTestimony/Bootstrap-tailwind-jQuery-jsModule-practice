const me = 2353546
console.log("Hello, World!");
// console.log(document.title)
let statement = "I am learning JavaScript"
console.log(statement.includes("JavaScript"));

// arrow function
let a = 15;
let b = 10;
// const add = (a, b) => a + b;
// console.log("The sum of "+ a +" and "+ b +" is "+add(a, b));
const add = (a, b) => {
  const sum = a + b;
  console.log("Adding numbers...");
  return sum;  // must use return
};
let results = (add(a, b));
console.log(results);
console.log(/\d/.test("Price is 100")); // true (because 100 has digits)

//ternary operator
let transaction =(a+b<18)? "You do not have enough funds" : "You have enough funds";
console.log(transaction);

// switch statement
let day = "Monday";
switch(day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid input, kindly enter a valid input");
}
//User login page
let isLoggedIn = true;

switch (isLoggedIn) {
  case true:
    console.log("Welcome back!");
    break;
  case false:
    console.log("Please log in.");
    break;
}

// validating user credentials 
    // const validUsername = "Mike";
    // const validPassword = "12345";

    // document.getElementById("loginForm").addEventListener("submit", function(event) {
    //   event.preventDefault(); // stop form from refreshing the page

    //   let username = document.getElementById("username").value.trim();
    //   let password = document.getElementById("password").value.trim();
    //   let message = document.getElementById("message");

    //   if (username === "" || password === "") {
    //     message.textContent = "⚠ Please fill in all fields.";
    //     message.style.color = "red";
    //   } else if (username === validUsername && password === validPassword) {
    //     message.textContent = "✅ Login successful. Welcome " + username + "!";
    //     message.style.color = "green";
    //   } else {
    //     message.textContent = "❌ Invalid username or password!";
    //     message.style.color = "red";
    //   }
    // });
// loops
let sum = 0;
let myArray = [10, 20, 30, 40, 50,900];
for (let i = 1; i <myArray.length; i++) {
  console.log(myArray[i]);
  console.log("The number and its index are: ");
  console.log(myArray[i]+ " : "+i );
  sum += myArray[i];
  // console.log("The sume of all the numbers is:"+ sum);
}
console.log("The total sum is: "+sum);
 // foreach loop
 console.log("Using forEach loop");
myArray.forEach((num, index) => {
  console.log(num + " : " + index);
});
console.log("The array containe "+myArray.length+" elements");

//while loop;
console.log("Using while loop");
let count = 0;
while (count < 5) {
  console.log("The count is: "+count);
  ++count;
}
// if-else loop
let basicSalary = 5000;
if (basicSalary < 1000) {
  basicSalary += 50;
  console.log("The total amount including tax is: "+basicSalary);
} else{
  basicSalary += 100;
  console.log("The total amount including tax is: "+basicSalary)
}
// do-while loop
console.log("Using do-while loop");
let assessment=30;
let marks=89;
let studentName="Mike";
do{
  console.log(`Dear ${studentName} our assessment are: ${assessment}`);
  console.log(`Your exams amrk is: ${marks}`);
  console.log(`The total score is: ${assessment + marks}`);
  // Decrease values so the loop can end
  assessment -= 10;
  marks -= 30;
} while(assessment!=0 && marks!=0);

// function to calculate area of a rectangle
function Area(length, width) {
  return length * width;
}
console.log("The area of the rectangle is: "+Area(10, 5));
// function to calculate circumference of a circle
let circumferenceCirecle = function(radius) {
  return 2 * Math.PI * radius;

}
console.log("The circumference of the circle is: "+Math.round(circumferenceCirecle(7)));

//objects
let person = {
  firstName: "Mike",
  lastName: "Ochieng",
  age: 25,
  isEmployed: true,
  skills: ["JavaScript", "HTML", "CSS", "React"],
  address: {
    street: "123 Main St",
    city: "Nairobi",
    country: "Kenya"
  },
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log("The person's full name is: "+person.fullName());

//adding a new property to the object
person.email = "gungshai45@gmail.com";
console.log("The person's email is: "+person.email);

// looping through object properties
console.log("Looping through object properties:");
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// arrays
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log("The first fruit is: "+fruits[0]);
console.log("The number of fruits is: "+fruits.length);
console.log(fruits);
fruits.push("Pineapple"); // add to the end
console.log(fruits);
fruits[3] = "Grapes"; // modify
console.log(fruits);
fruits.push(["Watermelon", "Papaya"]); // add array to array
console.log(fruits);
fruits.push({name: "Kiwi", color: "Brown"}); // add object to array
console.log(fruits);
console.log("The index of the grape  before shifingis: "+fruits.indexOf("Grapes"))

// console.log(fruits[5].color);
fruits.shift(); // remove from the beginning
console.log(fruits);
console.log("The index of the grape after shifting is: "+fruits.indexOf("Grapes"))


fruits.unshift("Strawberry"); // add to the beginning
console.log(fruits);

console.log("The index of the grape after unshifting is: "+fruits.indexOf("Grapes"))


console.log(fruits.reverse()); // remove from the end

// Student class
class Student{
  constructor(Name, age, course){
    this.name = Name;
    this.age = age;
    this.course = course;
  }
  details(){
    return `Student Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`;
  }
}

// creating an instance of the student class
let student1 = new Student("Johnson", 25, "Computer Science");
console.log("Student deytails: "+student1.details());

//inheriting from the Student class
class member extends Student{
  constructor(Name, age, course,ID,dateOfEnriollment, dateOfBirth){
    super(Name,age,course)
    this.ID = ID;
    this.dateOfEnriollment = dateOfEnriollment;
    this.dateOfBirth = dateOfBirth;
  }
  memberDetails(){
    return ` Name: ${this.name}, age: ${this.age}, course${this.course},Member ID: ${this.ID}, 
    Date of Enriollment: ${this.dateOfEnriollment}, Date of Birth: ${this.dateOfBirth}`;
  }
}
// creating an instance of the member class
let member1 = new member("Johnson",26, "Computer Science","M001", "2023-01-15", "1998-05-20");
console.log("Member details: "+member1.memberDetails());

class Teacher extends member{
  teachDetails(){
    return `Teacher Name: ${this.name}, Age: ${this.age}, Course: ${this.course}, Member ID: ${this.ID}`;
  }

}
let teacher1 = new Teacher("Alice", 30, "Mathematics", "T001", "2022-09-01", "1993-03-15");
console.log("Teacher details: "+teacher1.teachDetails());

console.log(`Tutor: ${teacher1.name} teaches ${teacher1.course}`);

// dates
console.log("Working with dates:");
let currentDate1 = Date.now();
console.log("Current date and time: "+currentDate1);
let currentDate2 = new Date();
console.log("Current date and time: "+currentDate2);

let currentDate = new Date();
let formatted =
  currentDate.getDate() + "-" +
  (currentDate.getMonth() + 1) + "-" +  // Months are 0-based
  currentDate.getFullYear() + " " +
  currentDate.getHours() + ":" +
  currentDate.getMinutes();

console.log("Formatted date and time: " + formatted);

// storing capitaals of nations with map
let capitals = new Map();

// setting values
capitals.set("Kenya", "Nairobi");
capitals.set("Uganda", "Kampala");
capitals.set("Tanzania", "Dodoma");
capitals.set("Rwanda", "Kigali");
capitals.set("Ghana", "Accra");
console.log("The capital of Kenya is: "+capitals.get("Kenya"));
console.log("All capitals:");
capitals.forEach((value, key) => {
  console.log(key + ": " + value);
});
//sets
let numbers = new Set([1, 2, 3, 4, 5]);
numbers.add(3); // duplicate, will be ignored
numbers.add(6); // new value
numbers.add(6); // duplicate, will be ignored
console.log("Set contents:");
numbers.forEach((value) => {
  console.log(value);
});

let set2 = new Set();
set2.add(10);
set2.add(20);   
set2.add(30);
set2.add(20); // duplicate, will be ignored
console.log("Set2 contents:");
set2.forEach((value) => { 
  console.log(value);
});
console.log(Array.from(numbers)); // [1, 2, 3, 4, 5]
console.log(Array.from(set2)); 

//promises
let promise = new Promise((resolve, reject) => {
  let success = false; 
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});
promise.then((message) => {
  console.log("Promise resolved: " + message);
}).catch((error) => {
  console.error("Promise rejected: " + error);
});

//fetching user data from an API 
async function getUser() {
  try {
    // Wait for the fetch Promise to resolve
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    // Wait for JSON parsing
    let user = await response.json();

    console.log("User Data:", user);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUser();


