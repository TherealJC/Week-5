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
let c = 0; {
mark: for (let i = 0; i < 5; i++)
    inner: for (let j = 0; j < 5; j++)
        c++; if (i == 2) break mark; }
console.log(c);

