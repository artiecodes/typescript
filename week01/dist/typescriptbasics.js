"use strict";
// 1. basic types
const number = 2;
const string = "Hello";
const boolean = true;
const array = [1, 2, 3];
const any = 2;
// 2.a create a numeric enum for each day of the week
// 2.b change one day to a string
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days["Friday"] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
// 3.a Create a ts class with properties for name, email and age private and add getters and setters
// 3.b make email readonly, create a constructor and create instance
class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getAge() {
        return this.age;
    }
    setName(name) {
        this.name = name;
    }
    /* can't make email readonly and have a setter
      setEmail(email: string) {
          this.email = email;
      }
      */
    setAge(age) {
        this.age = age;
    }
}
const person = new Person("Bjarke", "bjarke@mail.dk", 28);
// 3.c create a class employee that extends person
class Employee extends Person {
    constructor(name, email, age, salary) {
        super(name, email, age);
    }
}
// 4. use type assertion to convert any to string
const anyValue = "this is a string";
const strLength = anyValue.length;
// 5. create a function that takes two numbers as parameters and returns the sum
function add(a, b) {
    return a + b;
}
const status200 = [200, "OK"];
const status400 = [400, "Bad Request"];
const status404 = [404, "Not Found"];
const status500 = [500, "Internal Server Error"];
const personTuple = ["Bjarke", 28, "bjarke@mail.dk"];
// 7.a create a function that can accept a numer or a string
function printId(id) {
    console.log(id);
}
// 7.c call the function with a number and string
printId(2);
printId("2");
// 8.a create a generic function that takes an array of any type and returns the first element
function getFirstElement(arr) {
    return arr[0];
}
// 8.b create a generic function that takes two parameters that extends object and returns both object parameters combined
function combineObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
// 9.a create an array of numbers, but instead of number type use array (?)
const arrayOfNumbers = [1, 2, 3];
// 9.b create a multidimensional array of strings to use for the game tic tac toe 3x3
const ticTacToe = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
];
// 10 where in the code below would you need to use the exclamation mark to tell typescript that the variable is not null or undefined
// Part 1
function possibleUndefinedStringFunction() {
    throw new Error("Function not implemented.");
}
// A variable that might be null or undefined
let nullableValue = "Hello";
// Use the exclamation mark to assert that the value is non-null
let nonNullableValue = nullableValue;
console.log(nonNullableValue); // Output: Hello
// Part 2
// A variable that might be null or undefined
let myString = possibleUndefinedStringFunction();
// Use the exclamation mark to assert that the value is non-null
let lemgth = myString.length;
//                           ^ right here
// 11. Where in code below would you need to use the question mark to tell TypeScript that a variable is optional?
// Part 1
// A function that takes an optional parameter
function printName(name) {
    //                 ^ right here
    console.log(name);
}
// Call the function without a parameter
printName(); // Output: undefined
// Call the function with a parameter
printName("John"); // Output: John
// Create a person object with an age property
const person1 = {
    name: "John",
    age: 20,
};
// Create a person object without an age property
const person2 = {
    name: "John",
};
// 12. write a function that takes a string or number. if the parameter is a string, return the string, if it 's a number, return the number * 2
function stringOrNumber(param) {
    if (typeof param === "string") {
        return param;
    }
    else {
        return param * 2;
    }
}
// 13.a use type assertion to convert a variable from any to string
const anyValue2 = "this is a string";
const strLength2 = anyValue2.length;
// 13.b call a div element with id="myDiv" and convert it to HTMLInputElement
const myDiv = document.getElementById("myDiv");
// 14.a create a function that takes a string called direction as parameter. use literal types to narrow the type of parameter
function move(direction) {
    console.log(direction);
}
// 14.b if the direction is left, return 1, right return 2, up return 3, down return 4 using a switch
function move2(direction) {
    switch (direction) {
        case "up":
            return 3;
        case "down":
            return 4;
        case "left":
            return 1;
        case "right":
            return 2;
    }
}
// 15.b create a function that takes in a creator parameter that could be either person or alien. use the in operator to narrow the type of parameter
function createCreature(creature) {
    if ("eat" in creature) {
        creature.eat();
    }
    else {
        creature.fly();
    }
}
// 16.a create two simple objects for a person and a car
const person3 = {
    name: "John",
    age: 20,
};
const car = {
    make: "Tesla",
    model: "Model Y",
};
// 16.b create a function that takes a person or a car as parameter. use instaceof to narrow the type. if person, return name, if car return model.
function getNameOrModel(obj) {
    if (obj instanceof Object) {
        return obj.name || obj.model;
    }
    return "";
}
// write a type predicate to narrow the type of the fish parameter
function isFish(pet) {
    return pet.swim !== undefined;
}
function howToMove(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
// 18.b create an object of type person with a name property and an additional property called age
const person4 = {
    name: "John",
    age: 20,
};
// 19.b create a function that takes a person and student as parameters. use intersection types to combine two interfaces to one. funtion should return an object
function createStudent(person, student) {
    return { ...person, ...student };
}
