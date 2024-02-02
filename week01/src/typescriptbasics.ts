// 1. basic types
const number: number = 2;
const string: string = "Hello";
const boolean: boolean = true;
const array: number[] = [1, 2, 3];
const any: any = 2;

// 2.a create a numeric enum for each day of the week
// 2.b change one day to a string
enum Days {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday = "Friday",
  Saturday = 6,
  Sunday,
}

// 2.c what could be similar to an enum? = union type
type DaysOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

// 3.a Create a ts class with properties for name, email and age private and add getters and setters
// 3.b make email readonly, create a constructor and create instance
class Person {
  private name: string;
  private readonly email: string;
  private age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getAge(): number {
    return this.age;
  }

  setName(name: string) {
    this.name = name;
  }

  /* can't make email readonly and have a setter
    setEmail(email: string) {
        this.email = email;
    }
    */

  setAge(age: number) {
    this.age = age;
  }
}

const person = new Person("Bjarke", "bjarke@mail.dk", 28);

// 3.c create a class employee that extends person

class Employee extends Person {
  constructor(name: string, email: string, age: number, salary: number) {
    super(name, email, age);
  }
}

// 4. use type assertion to convert any to string
const anyValue: any = "this is a string";
const strLength: number = (anyValue as string).length;

// 5. create a function that takes two numbers as parameters and returns the sum
function add(a: number, b: number): number {
  return a + b;
}

// 6.a define 4 tuples representing the http status: 200, 400, 404, 500 with the appropriate messages
type HttpStatus = [number, string];
const status200: HttpStatus = [200, "OK"];
const status400: HttpStatus = [400, "Bad Request"];
const status404: HttpStatus = [404, "Not Found"];
const status500: HttpStatus = [500, "Internal Server Error"];

// 6.b define a tuple representing a person with a name, age and email
type PersonTuple = [string, number, string];
const personTuple: PersonTuple = ["Bjarke", 28, "bjarke@mail.dk"];

// 7.a create a function that can accept a numer or a string
function printId(id: number | string) {
  console.log(id);
}

// 7.b create a type alias for the person tuple where the age property can be a name or string
type PersonTuple2 = [string, number | string, string];

// 7.c call the function with a number and string
printId(2);
printId("2");

// 8.a create a generic function that takes an array of any type and returns the first element
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// 8.b create a generic function that takes two parameters that extends object and returns both object parameters combined
function combineObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// 9.a create an array of numbers, but instead of number type use array (?)
const arrayOfNumbers: Array<number> = [1, 2, 3];

// 9.b create a multidimensional array of strings to use for the game tic tac toe 3x3
const ticTacToe: string[][] = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
];

// 10 where in the code below would you need to use the exclamation mark to tell typescript that the variable is not null or undefined
// Part 1

function possibleUndefinedStringFunction(): string | undefined {
    throw new Error("Function not implemented.");
}

// A variable that might be null or undefined
let nullableValue: string | null | undefined = "Hello";

// Use the exclamation mark to assert that the value is non-null
let nonNullableValue: string = nullableValue!;

console.log(nonNullableValue); // Output: Hello

// Part 2
// A variable that might be null or undefined
let myString: string | undefined = possibleUndefinedStringFunction();
// Use the exclamation mark to assert that the value is non-null
let lemgth: number = myString!.length;
//                           ^ right here

// 11. Where in code below would you need to use the question mark to tell TypeScript that a variable is optional?
// Part 1
// A function that takes an optional parameter
function printName(name?: string) {
  //                 ^ right here
  console.log(name);
}

// Call the function without a parameter
printName(); // Output: undefined
// Call the function with a parameter
printName("John"); // Output: John

// Part 2
// A type alias with an optional age property
type Person1 = {
  name: string;
  age?: number;
  // ^ right here
};

// Create a person object with an age property
const person1: Person1 = {
  name: "John",
  age: 20,
};
// Create a person object without an age property
const person2: Person1 = {
  name: "John",
};

// 12. write a function that takes a string or number. if the parameter is a string, return the string, if it 's a number, return the number * 2
function stringOrNumber(param: string | number): string | number {
  if (typeof param === "string") {
    return param;
  } else {
    return param * 2;
  }
}

// 13.a use type assertion to convert a variable from any to string
const anyValue2: any = "this is a string";
const strLength2: number = (anyValue2 as string).length;

// 13.b call a div element with id="myDiv" and convert it to HTMLInputElement
const myDiv = document.getElementById("myDiv") as HTMLInputElement;

// 14.a create a function that takes a string called direction as parameter. use literal types to narrow the type of parameter
function move(direction: "up" | "down" | "left" | "right") {
  console.log(direction);
}

// 14.b if the direction is left, return 1, right return 2, up return 3, down return 4 using a switch
function move2(direction: "up" | "down" | "left" | "right"): number {
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

// 15.a create two simple type aliases for a human and an alien. both alias should have a specific function like eat and fly
type Human = {
  eat: () => void;
};

type Alien = {
  fly: () => void;
};

// 15.b create a function that takes in a creator parameter that could be either person or alien. use the in operator to narrow the type of parameter
function createCreature(creature: Human | Alien) {
  if ("eat" in creature) {
    creature.eat();
  } else {
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
function getNameOrModel(obj: any): string {
  if (obj instanceof Object) {
    return obj.name || obj.model;
  }
  return "";
}

// 17. type predicates
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

// write a type predicate to narrow the type of the fish parameter
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function howToMove(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

// 18.a create an interface for a person with name property and an index signature to allow additional properties
interface Person2 {
  name: string;
  [propName: string]: any;
}

// 18.b create an object of type person with a name property and an additional property called age
const person4: Person2 = {
  name: "John",
  age: 20,
};

// 19.a create two interfaces for a person and student. person should have name and student should have studentid
interface Person3 {
  name: string;
}

interface Student extends Person3 {
  studentId: number;
}

// 19.b create a function that takes a person and student as parameters. use intersection types to combine two interfaces to one. funtion should return an object
function createStudent(person: Person3, student: Student): Person3 & Student {
  return { ...person, ...student };
}