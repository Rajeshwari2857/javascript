console.log("Heloww");  

age = 18
console.log(age)
//this will work, cuz js is forgiving but will have issues later, so dont compromise on the ; and let

//let is a variable type
if (true) {
    let z =3; //this z variable does not exist outside {}
}
//console.log(z) will throw error

if (true) {
    x = 14;
}
console.log(x); 
//x will be printed. variable escapes outside the block

//truthy-falsy values
if (0) {
    console.log("run");
}
else {
    console.log("does not run");
}
//falsy values are 0, -0, 0n, "", null, undefined, NaN
//everything else is truthy


//logical operators

//&& - AND
console.log(0 && "ok");
console.log("ok" && 0);
console.log(null && 0);
console.log("ok" && 5);
//returns the first falsy value

//|| - OR
console.log(0 || "ok");
console.log("ok" || 0);
console.log(0 || null);
console.log("ok" || 9);
//returns the first truthy value

//?? - nullish coalescing
//0 and "" is a value too, thats why ?? exists to replace || 
console.log(false ?? true);
console.log(false || true);
//returns RHS if and only if LHS is null or undefined

//== wont check if values are equal. it will convert types 
console.log(5 == "5");
//truthy != truthy btw
console.log(true == "3");
//objects are compared by reference not value
console.log(0==[]);
console.log([]==[]); //[] and [] are diff objects

//use === to see if values and types both match
console.log(5 === "5");

//objects
let alien = {
    name: "navin",
    tech: "js"
};
let techhh = 'tech';

console.log(alien.name);
console.log(alien['name']);
console.log(alien[techhh]); //only where we use this method


//FUNCTIONS
function test() {
    let x = 10;
}
y = test();
console.log(y);
//default is undefined

function greet(user) {
    return `hello ${user}!!` 
}

let str = greet('navin');
console.log(str);

//functions can also be assigned to an obj
add = function (num1, num2) {
    return num1 + num2
}

let result = add(4,6)
console.log(result)

//when arguments arent passed
subtract = function (num1, num2, num3=1) {
    return num1 - num2 - num3
}
//1 is set as default value for num3 if it isnt passed
console.log(subtract(5,3))

//arrow functions
//we use arrow functions when we only have one return statement
let multiply = (num1, num2) => (num1*num2);
// or multiple = (num1, num2) => {
//     return num1*num2
// }


//ARRAY METHODS
//1.maps
let nums = [1,2,3];
let double = nums.map(function (x) {
    return x*4;
});

let double2 = nums.map(x => x*5);
console.log(double);
console.log(double2);

