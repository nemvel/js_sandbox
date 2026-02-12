/* JS Under The Hood */

// Lesson 1 Examples //
// Call Stack //

// function first() {
//     console.log('first...');
//     second();
// }

// function second() {
//     console.log('second...');
//     third();
// }

// function third() {
//     console.log('third...');
// }

// first();

// Lesson 2 Examples //
// Creation And Execution //

// var x = 100;
// var y = 50;

// function getSum(n1, n2) {
//     var sum = n1 + n2;
//     return sum;
// }

// var sum1 = getSum(x, y);
// var sum2 = getSum(10, 5);

// Hoisting //
// console.log(x);
// let x = 100;
// var y = 50;

// console.log(getSum(x, y));

// function getSum(n1, n2) {
//     var sum = n1 + n2;
//     return sum;
// }


// Lesson 3 Examples //
// Async //

// window.setTimeout(() => {
//     console.log('Hello from callback');
// }, 2000);

// console.log('Hello');



// Lesson 4 Examples //
// Memory Storage //

// Primitive types: Stored on the stack
// let name = 'John';
// let age = 30;

// Reference types: Stored on the heap
// let person = {
//     name: 'Brad',
//     age: '40'
// };

// let newName = name;
// newName = 'Jonathan';

// console.log(name);
// console.log(newName);

// let newPerson = person;
// newPerson.name = 'Bradley';

// console.log(person);
// console.log(newPerson);


// Heap Snapshot in Dev Tools //
// function Person(name) {
//     this.name = name;
// }

// const person1 = new Person('John');
// const person2 = new Person('Jane');
// const person3 = new Person('Bob');

// Lesson 5 Examples //
// JS Engine //