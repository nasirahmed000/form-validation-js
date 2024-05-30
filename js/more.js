// 1. Variable declaration and types
let num = 10;
const str = "Hello, World!";
let isActive = true;
let arr = [1, 2, 3, 4, 5];
let obj = { name: "Alice", age: 25 };

// 2. Functions (including arrow functions)
function greet(name) {
    return `Hello, ${name}!`;
}

const add = (a, b) => a + b;

// 3. Conditionals and loops
if (isActive) {
    console.log(greet("User"));
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(num => console.log(num * 2));

// 4. Array methods
let filteredArr = arr.filter(num => num > 2);
let mappedArr = arr.map(num => num * 3);
let reducedValue = arr.reduce((acc, num) => acc + num, 0);

console.log(filteredArr);
console.log(mappedArr);
console.log(reducedValue);

// 5. Object manipulation
obj.email = "alice@example.com";
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// 6. Promises and async/await
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { userId: 1, title: "Sample Data" };
            resolve(data);
        }, 2000);
    });
}

async function getData() {
    try {
        let data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data", error);
    }
}

getData();

// 7. Error handling
try {
    let result = add(5, "a"); // This will not cause an error, but we'll log a type check
    if (isNaN(result)) {
        throw new Error("Invalid number operation");
    }
    console.log(result);
} catch (error) {
    console.error(error.message);
}

// 8. console.table 

// an object whose properties are strings

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const me = new Person("Tyrone", "Jones");

console.table(me);
