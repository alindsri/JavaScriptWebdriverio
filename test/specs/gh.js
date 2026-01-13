// 1. Primitive Data Types
let stringType = "Hello, JavaScript!"; // String
let numberType = 123;                 // Number (integer)
let floatType = 12.34;                // Number (float)
let booleanType = true;               // Boolean
let nullType = null;                  // Null
let undefinedType;                    // Undefined
let symbolType = Symbol('uniqueId');  // Symbol

console.log("--- Primitive Data Types ---");
console.log("String:", stringType, typeof stringType);
console.log("Number (integer):", numberType, typeof numberType);
console.log("Number (float):", floatType, typeof floatType);
console.log("Boolean:", booleanType, typeof booleanType);
console.log("Null:", nullType, typeof nullType);
console.log("Undefined:", undefinedType, typeof undefinedType);
console.log("Symbol:", symbolType, typeof symbolType);

// 2. Object Data Types
let objectType = { key: "value", anotherKey: 42 }; // Object
let arrayType = [1, 2, 3, "four"];                 // Array (which is an object)
let functionType = function() { return "I am a function"; }; // Function

console.log("\n--- Object Data Types ---");
console.log("Object:", objectType, typeof objectType);
console.log("Array:", arrayType, typeof arrayType);
console.log("Function:", functionType(), typeof functionType);

// 3. Class with Getters and Setters
class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName; // Conventionally, underscore indicates a private-like property
    this._lastName = lastName;
    this._age = age;
  }

  // Getter for fullName
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Setter for fullName
  set fullName(name) {
    const parts = name.split(' ');
    if (parts.length === 2) {
      this._firstName = parts[0];
      this._lastName = parts[1];
    } else {
      console.warn("Invalid name format for setter. Please provide 'FirstName LastName'.");
    }
  }

  // Getter for age (with validation/transformation)
  get age() {
    return this._age;
  }

  // Setter for age (with validation)
  set age(newAge) {
    if (typeof newAge === 'number' && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Invalid age. Age must be a non-negative number.");
    }
  }
}

console.log("\n--- Class with Getters and Setters ---");
const person1 = new Person("John", "Doe", 30);

console.log("Initial Full Name:", person1.fullName); // Accessing getter
console.log("Initial Age:", person1.age);           // Accessing getter

person1.fullName = "Jane Smith"; // Using setter
person1.age = 25;                // Using setter
//person1.

console.log("Updated Full Name:", person1.fullName);
console.log("Updated Age:", person1.age);

// Demonstrating setter validation
person1.age = -5; // This will trigger the error message in the setter
person1.fullName = "SingleName"; // This will trigger the warning message