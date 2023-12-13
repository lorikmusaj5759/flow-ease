/**
 * Filename: ComplexProgram.js
 * Content: A complex program showcasing various JavaScript concepts and functionalities.
 */

// Define a class for representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello! My name is ${this.name} and I am ${this.age} years old.`);
  }

  static compareAges(person1, person2) {
    return person1.age - person2.age;
  }
}

// Create a few instances of the Person class
const john = new Person("John", 30);
const sarah = new Person("Sarah", 28);
const mike = new Person("Mike", 35);

// Access instance properties and call instance methods
john.greet(); // Output: Hello! My name is John and I am 30 years old.
sarah.greet(); // Output: Hello! My name is Sarah and I am 28 years old.
mike.greet(); // Output: Hello! My name is Mike and I am 35 years old.

// Use the static method to compare the ages of two persons
console.log(Person.compareAges(john, sarah)); // Output: 2

// Define a subclass of Person called Employee
class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  static compareSalaries(emp1, emp2) {
    return emp1.salary - emp2.salary;
  }

  greet() {
    super.greet(); // Call the greet method of the parent class
    console.log(`I am an employee with a salary of ${this.salary}.`);
  }
}

// Create instances of Employee
const amy = new Employee("Amy", 25, 50000);
const david = new Employee("David", 32, 70000);

amy.greet();
david.greet();

console.log(Employee.compareSalaries(amy, david));

// Define a function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// Define a higher-order function that generates a function for calculating exponents
function createPowerFunction(exponent) {
  return function (base) {
    return base ** exponent;
  };
}

const square = createPowerFunction(2);
const cube = createPowerFunction(3);

console.log(square(4)); // Output: 16
console.log(cube(3)); // Output: 27

// Use map and filter array methods to manipulate an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const filteredNumbers = numbers.filter((num) => num % 2 === 0);
console.log(filteredNumbers); // Output: [2, 4, 6, 8, 10]