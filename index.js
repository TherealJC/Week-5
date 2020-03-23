//With curly brackets, for loop +1
for (let i = 0; i < 5; i++) {
console.log(i);
}
//Without curly brackets, using 1 semi-colon instead, For loop -1
for (let i = 5; i > 0; i--)
console.log(i);
//For loop with break
for (let i = 0;; i++) {
    console.log("loop, i = " + i);
    if (i > 1)
        break;
};
//Multiple Statements
let counter = 0;
function inc() { counter++; }for (let i = 0; i < 10; i++, inc());
console.log(counter);
//Incrementing numbers
for (let i = 0; i < 10; i++)
    counter++;counter;

//Nested For Loops, Using ++ and --
for (let y = 0; y < 2; y++)
    for (let x = 0; x < 2; x++)
    for (let z = 0; z < 5; z++) 
    for (let a = 5; a > 0; a--) 
        console.log(x, y, z, a);
//Example of loop length, because i < 3, i will not go over 3, producing only 3 loops
for (let i = 0; i < 3; i++) console.log("loop.");
//Same but using brackets, allowing multiple statements
for (let i = 0; i < 3; i++) { let loop = "loop."; console.log(loop) };
//Skipping steps, you can skip a step by using 'continue'
//Because of if i==1 continue, once the counter reaches 1, it will SKIP the next iteration.
for (let i = 0; i < 3; i++) { if (i == 1) continue; console.log( i ); };

//In this next line, there are 2 semicolons while establishing let, this is needed, as
//we are leaving that statement blank, usually we would have >, <, ==, in there, despite
//being empty, the regular 2 semicolons are still needed.
//You can BREAK out of a for loop by using the break keyword
for (let i = 0;; i++) { console.log("loop"); break; };
// as you can see, normally it would count up indefinitely, but the use of 'break' stops this from happening
//In JavaScript, a statement can be labeled when a label_name: is prepended to a statement.
//Because a for loop is a statement you can label for loops. Let’s try to increment value of c inside the inner loop.
//By choosing whether to break the loop and jump to the inner or mark label, we change the pattern in which the for loops will work:
// let c = 0;
// for (let i = 0; i < 5; i++)
// for (let c = 0; c < 5; c++)  {
//         c++; if (i == 2) break;
// console.log(c);
// }
//Website example that doesn't work, i have tried playing around with it, but it doesnt work
// the 'mark' command errors with "Undefined label 'mark'" and removing mark leaves me with 
//the error of illegal break statement 'break'
// let c = 0;
// mark: for (let i = 0; i < 5; i++)
// console.log(i);
//     inner: for (let j = 0; j < 5; j++)
//     console.log(j);
//         c++; if (i == 2) break mark;
//     console.log(c++); 
// console.log(c);

//Kyran showed me how to do it properly, it would have been A LOT easier if the example actually worked
//and wasn't missing crucial parts of the code (the curly brackets)
let c = 0;
mark: for (let i = 0; i < 5; i++){
    inner: for (let j = 0; j < 5; j++){
        c++; if (i == 2) break mark;
    }
}
console.log(c);

//Breaking a block, As we can see here, because the code breaks first, it will not continue onto "after" 
//You can use the break keyword to break out of regular 'non for-loop' blocks as long as it’s labeled:
block: {
    console.log("before");
    break block;
    console.log("after");
}
//Generator executes a yield statement in an asynchronous way but it will execute only one next yield 
//statement every time the function is called:
function* generator() {
    yield 5;
    yield 10;
    yield 15;
  }for (let value of generator())
console.log( value );
//all the {} and () are hard to understand why they are neccesary

//for..of loops, and strings, i dont get the value part, but it makes it show each string individually
let string = 'text';for (let value of string)
  console.log( value );

//Arrays and for.. of loops
let array = [0, 1, 2];
for (let value of array)
   console.log( value );
//for..of loops work only with iterable values. Objects are not iterable. Arrays are.
//An iterable is any Python object capable of returning its members one at a time,
//permitting it to be iterated over in a for-loop. (Even the explanation makes no sense)
//As a remedy you can first convert an object to an iterable using some of the built-in Object methods: .keys(), .values() or .entries():
//The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
//Example of object keys
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  console.log(Object.keys(object1));
//In my opinion, this is turning objects into iterable code so that it can be used in loops

//A while loop will iterate for an indefinite number of times until the specified condition (there is only one) 
//evaluates to false. At which point your loop will stop and execution flow will resume.
let g = 0;while (g++ < 5)
    console.log(g);
//A secondary condition can be tested within the loop. This makes it possible to break from the loop earlier if needed:
while (g++) {
    if (g = 3)
        break;
}
console.log(g);
//I wrote this example myself, the function stops once qq reach greater than (>) 3, so it stops at 4 as
//4 is the first number greater than 3
let qq = 0; while (qq++ <5) {
    if (qq > 3)
    break;
}
console.log(qq)

//Continue used to skip steps, here it stops once it reaches 1, and skips the step of e++ > 1000
let e = 0;
while (e++ < 1000) {
    if (e > 1)
        continue;
    console.log(e);
}
//Array methods are attached to Array.prototype property. This means you can execute them directly
//from array object like array.forEach() or directly from array’s literal value like: [1,2,3].forEach();
//Array.forEach, Return value: none The forEach method will execute a function for every item in the array.
//Each iteration step receives 3 arguments value, index, object. It’s similar to a for-loop but cleaner:
let fruit = ['pear', 'banana', 'orange', 'apple', 'pineapple'];
let print = function(item, index, object) { console.log(item); }
fruit.forEach( print );
console.log(fruit);
//
fruit.forEach(function(item, index, object) {
    console.log(item, index, object);
});
