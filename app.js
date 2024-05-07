//Question No.2
//Personal Message: Store a person’s name in a variable, and print a message to that person. 
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
//let personName: string="ERIC";
//console.log(`hello ${personName} would you like to learn some python today`);
//Question No.3
//Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.
//UpperCase
/*function toUpperCase(uppercase:string) {
    return uppercase.toUpperCase();
}
let inputString:string="shehreyar khan";
let upperCaseString:string= toUpperCase(inputString);
console.log("UpperCase:", upperCaseString);

//LowerCase
function toLowerCase(lowercase:string) {
    return lowercase.toLowerCase();
}
let input_String:string="shehreyar khan";
let lowerCaseString:string= toLowerCase(input_String);
console.log("LowerCase:", lowerCaseString);

//Title Case
let personName:string="Shehreyar Khan"

let words:string[] = personName.split(" ");

 let titleCaseName: string ="";
 for(let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " "
 }
 console.log("TitleCase:",titleCaseName)*/
//Question No.4
/*let famousQuote:string="There is no tomorrow."
let author:string="Sheharyar Khan."
console.log(`"${author}once said, ${famousQuote}"`);

//Question No.5
let famousPerson:string="Sheharyar Khan"
let message:string=`${famousPerson} once said,"${famousQuote}"`;
console.log(message);

//Question No.6
let NameWithWhiteSpace:string="\t \n sheharyar \t \n";
console.log("Name With White Space:",NameWithWhiteSpace);

let stripped:string= NameWithWhiteSpace.trim();
console.log("stripped name:",stripped);

//Question No.7
let addition:number=5+3
console.log("The Sum of 5+3 is:",addition);
let substraction:number=12-4
console.log("the sum of 12-4 is:",substraction);
let multiplication:number=2*4
console.log("the sum of 4*2:",multiplication);
let division:number=16/2
console.log("the sum of 16/2 is:",division);

//Question No.8
console.log(5+3);
console.log(12-4);
console.log(4*2);
console.log(16/2);

//Question No.9
let favouriteNumber:number=8;
let messageResult:string=`My favourite Number: ${favouriteNumber} `;
console.log(messageResult);

//Question No.10
//this programs add two numbers and prints the result
//define two numbers
let number1:number=10;
let number2:number=20;
//add two numbers
let result:number=number1 + number2;
//print result
console.log(result);

//Question No.11
//array
//define an array of names
let names: string[]=["shehreyar","umer","ibrahim","yaseen"];

// loop method

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each method

names.forEach(friend => {
    console.log(friend);
});

//for of loop

for (const friendNames of names) {
    console.log(friendNames);
    
}

//Question No.12
for (let i = 0; i < names.length; i++) {
    console.log(`hello, ${names[i]}!how are you?`);
    
    
}

//for each
names.forEach(friend=>{
    console.log(`hello, ${friend}!how are you?`);
});

//for of loop
for (let friendNames of names) {
    console.log(`dear,${friendNames}! how are you?`);
    
}
   
//Question No.13
//let transportation:string[] =["car","motorcycle","bicycle","bus"];

//for (let i=0; i<transportation.length;i++) {
    //console.log(`I would like to own a ${transportation[i]}`);
//}

//Question No.14
//let guestList:string[] =["sheharyar","ibrahim","umer","yaseen"];

//guestList.forEach(Dost => {
    //console.log(`I would like to invite you my friend "${Dost}" on dinner tomorrow to my home,Thanks.`);
    
//});*/
//Question No.15
let guestList = ["shehreyar", "umer", "ibrahim", "Hina Naseer", "yaseen"];
/*let unableAttend:string=guestList.splice(1,1)[0];

console.log(`${unableAttend} cant make dinner`);
//push

guestList.push("Hina Naseer");


//print a message
guestList.forEach(guest => {
    console.log(`Dear ${guest}, youre invited for dinner`);
    
});*/
//Question No.16
/*console.log("Great News! we found a bigger table");
//unshift
guestList.unshift("Babar Azam");
//splice
guestList.splice(Math.floor(guestList.length/2),0,"Virat Kohli");
//push
guestList.push("Imran Khan");
//for each
guestList.forEach(guests => {
   console.log(`Dear ${guests} you all are invited on dinner tommorow`);
    
});*/
//Question No.17
/*console.log("Unfortunately! the new dinner table wont arrived so we an invite only two guests");

guestList.unshift("alice", "bob");

console.log("Updated list of guests" ,guestList);

while (guestList.length > 2) {
    let removeGuest:string | undefined = guestList.pop()
    if (removeGuest !== undefined){
        console.log(`Sorry ${removeGuest}, you are not invited for dinner`);
    }
}

guestList.forEach(guest => {
    console.log(`dear ${guest} you are still invited for dinner`);
})

guestList.splice(0 ,guestList.length)

console.log("Updated list of guests:" ,guestList);*/
//Question No.18
/*let placeToVisit:string[] = ["paris" , "switzerland" ,"saudi arab" ,"america"];

//print in orignal order
console.log("Orignal Order:",placeToVisit);

//print your array in alphabetical order without modifying the actual list.

console.log("Alphabetical Order:",placeToVisit.slice().sort());

//array is still in its orignal order by printing it.
console.log("Orignal Order:",placeToVisit);

//Print  Array In Reverse Alphabatical order without changing the order of the orignal list.
 console.log("Reverse Alphabetical Order:",placeToVisit.slice().sort().reverse());

 //array is still in its orignal order by printing it.
 console.log("Orignal Order:",placeToVisit);

 //Reverse the order of your list. print the array to show that its order has changed.
 console.log("Reverse Order Changed:");
 placeToVisit.reverse();
 console.log(placeToVisit);

 //Reverse the order of your list again .print the list to it's back to its orignal order.
 console.log("Orignal Order:",placeToVisit.sort());
 console.log(placeToVisit);
 
//sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Reverse Alphabetical Order Changed:",placeToVisit.sort().reverse());
console.log(placeToVisit);*/
//Question No.19
/*console.log("Unfortunately! the new dinner table wont arrived so we an invite only two guests");

guestList.unshift("alice", "bob");

console.log("Updated list of guests" ,guestList);

while (guestList.length > 2) {
    let removeGuest:string | undefined = guestList.pop()
    if (removeGuest !== undefined){
        console.log(`Sorry ${removeGuest}, you are not invited for dinner`);
    }
}

guestList.forEach(guest => {
    console.log(`dear ${guest} you are still invited for dinner`);
})

guestList.splice(0 ,guestList.length)

console.log("Updated list of guests:" ,guestList);*/
//Question No.20
/*let countries:string[]=["USA","Switzerland","France","Japan"]

//print list of countries

console.log("List Of Countries:",countries.forEach(
    country => {
        console.log(country);
    }
));*/
//Question No.21
//In Object What We Learned
//Default typed object
//update property
//add new property
//define custom new tpe property
//use any with object
//They think of somthing you could store in a typescript object.
//write a programe that creates objects containing these items.
let student = {
    name: "Sheharyar Khan",
    rollNumber: "295",
    grades: [85, 90, 75]
};
console.log(student.grades[1]);
let products = {
    name: "laptop",
    price: 8000,
    description: "high perfomance laptop with fast processors"
};
console.log(products.price);
let person1 = {
    name: "Sheharyar",
    age: 17,
    city: "Karachi",
};
let person2 = {
    name: "Umer Khan",
    age: 16,
    city: "Karachi",
};
console.log(person2.name);
//type annotation
let myVariable1 = "hello";
//type infers
let anotherVariable = 'world';
//initial object
let person = {
    name: "Sheharyar",
    age: 17,
    city: "Karachi"
};
//update property
person.age = 17;
person.city = "Lahore";
console.log(person.age);
//add new property
//person["gender"] = "male";
//console.log(person.gender);
//Question No.22
//intentional error:if you haven't recieved an array index array in one of your programs yet
//,try to make one happen .change an index error.make sure you correct the error before closing 
//the programe.
//let intentionError: number[]= [1,2,3,4,5];
//console.log(intentionError[10]);
//Question No.23
//Conditional Tests: Write a series of conditional test.10test.
//Test No.1
/*let car ='subaru';

console.log("is car == 'subaru'? I predict true. ");

console.log(car == 'subaru');

//Test No.2

console.log("is car =='Alto'? I predict false. ");

console.log(car =='Alto');

//Test No.3

console.log("Is car === 'subaru'? I predict true");
console.log(car === 'subaru');

//Test No.4

console.log("Is car ==='subaru'? I predict false");
console.log(car ==='subaru');

//Test No.5

console.log("Is car.length >  0? I predict true");
console.log(car.length >0);

//Test No.6

console.log("Is car.length < 5? I predict false");
console.log(car.length <5);

//Test No.7

console.log("Is car.toUpperCase() === 'SUBARU' I predict true");
console.log(car.toUpperCase() === 'SUBARU');

//Test No.8

console.log("Is car.toUpperCase() === 'subaru' I predict true");
console.log(car.toUpperCase() === 'subaru');

//Test No.9

console.log("Is car.toLowerCase() === 'subaru' I predict true");
console.log(car.toLowerCase() === 'subaru');

//Test No.10

console.log("Is car.includes('u')? I predict true");
console.log(car.includes);*/
//Question No.24
/*const string1:string="Hello Sherry"
const string2:string="Helllo World"

console.log(string1 === string2); //false
console.log(string1 !== string2); //True

//Test Using The lower case function
const upperCase: string= " HELLO";
const lowerCase: string="hello";
console.log(upperCase.toLowerCase() === lowerCase);//true

// Numerical tests involving equality an ineqyuality , greater
//than and less than, greater or equal to, and less than or equal to

const number1: number = 10;
const number2: number = 20;

console.log(number1 === number2); //false

console.log(number1!== number2); //true

console.log(number1 > number2); //false

console.log(number1 < number2); //true

console.log(number1 >= number2); //false

console.log(number1 <= number2); //true

//Test Using "and" and "or" operators
 
const x : number = 10;

const y : number = 20;

const z : number = 30;

console.log(x < y && y < z);;//true

console.log(x > y || y < z);;//true

console.log(x < y && y > z);;//false

//test whether an item is in an array

const array1: number[] = [1,2,3,4,5];
const itemtoFind:number= 3;

console.log(array1.indexOf(itemtoFind) !== -1);//true

//test whehther item is not in an array

console.log(array1.indexOf(10) === -1);//true*/
/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable
 called alien_color and assign it a value of 'green', 'yellow', or 'red'.

•Write an if statement to test whether the alien’s color is green. If it is,
 print a message that the player just earned 5 points.

•Write one version of this program that passes the if test and another that fails.
 (The version that fails will have no output.)
 */
//Question No.25
// Version 1: Passes the if test (alien_color is 'green')
/*let alien_color_pass: string = 'green';

if (alien_color_pass === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

// Version 2: Fails the if test (alien_color is 'yellow')
let alien_color_fail: string = 'yellow';

if (alien_color_fail === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
*/
//Question No.26
/*
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
 write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5
points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned
10 points.

• Write one version of this program that runs the if block and another that runs
 the else block.
 */
// Version 1: Runs the if block (alien_color is 'green')
/*let alien_color_if: string = 'green';

if (alien_color_if === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}

// Version 2: Runs the else block (alien_color is 'red')
let alien_color_else: string = 'red';

if (alien_color_else === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}*/
//Question No.27
/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for
the appropriate color alien.
*/
// Version 1: Green alien
/*let alien_color_1: string = 'green';

if (alien_color_1 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color_1 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color_1 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}

// Version 2: Yellow alien
let alien_color_2: string = 'yellow';

if (alien_color_2 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color_2 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color_2 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}

// Version 3: Red alien
let alien_color_3: string = 'red';

if (alien_color_3 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color_3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color_3 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}*/
//Question No.28
/*
28.Stages of Life: Write an if-else chain that determines a person’s stage of life.
Set a value for the variable age, and then:

•If the person is less than 2 years old, print a message that the person is a baby.

•If the person is at least 2 years old but less than 4, print a message that the
person is a toddler.

•If the person is at least 4 years old but less than 13, print a message that the
person is a kid.

•If the person is at least 13 years old but less than 20, print a message that
the person is a teenager.

•If the person is at least 20 years old but less than 65, print a message that
the person is an adult.

•If the person is age 65 or older, print a message that the person is an elder.
*/
/*let age: number = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}*/
//Question No.29
/*
29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of
independent if statements that check for certain fruits in your array.

•Make a array of your three favorite fruits and call it favorite_fruits.

•Write five if statements. Each should check whether a certain kind of fruit is
in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas!
*/
// 29. Favorite Fruit: Make an array of your favorite fruits, and then write a series of
// independent if statements that check for certain fruits in your array.
// • Make an array of your three favorite fruits and call it favorite_fruits.
const favorite_fruits = ["banana", "apple", "grapes"];
// • Write five if statements. Each should check whether a certain kind of fruit is 
// in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
// Check for banana
/*if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

// Check for apple
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

// Check for grapes
if (favorite_fruits.includes("grapes")) {
    console.log("You really like grapes!");
}

// Check for orange
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}

// Check for mango
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}*/
//Question No.30
/*
30.Hello Admin: Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user after they
log in to a website. Loop through the array, and print a greeting to each user:

•If the username is 'admin', print a special greeting, such as Hello admin, would
you like to see a status report?

•Otherwise, print a generic greeting, such as Hello Eric, thank you for logging
in again.
*/
// Array of usernames
/*const usernames: string[] = ["admin", "Hina", "Sheharyar", "Umer", "Ameen"];

for (const username of usernames) {
    if (username.toLowerCase() === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
    
}*/
//Question No.31
/*
31.No Users: Add an if test to Exercise 30 to make sure the list of users is not
empty.

•If the list is empty, print the message We need to find some users!

•Remove all of the usernames from your array, and make sure the correct message
is printed.*/
/*const users: string[] = ["admin", "Eric", "Alice", "Bob", "Charlie"];

if (users.length > 0) {
    
    for (const username of users) {
        if (username.toLowerCase() === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
//exercise_31
 else {
    
    console.log("We need to find some users!");
}


users.length = 0;


if (users.length === 0) {
    console.log("The list of users is empty now.");
}*/
//Question No.32
/*
33.Ordinal Numbers: Ordinal numbers indicate their position in a array, such as
1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each
number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each
result should be on a separate line.
*/
/*const _numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of _numbers) {
    
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}*/
//Question No.33
/*
34.Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza
names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza instead of
 printing just the name of the pizza. For each pizza you should have one line of
 output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much
 you like pizza. The output should consist of three or more lines about the kinds
  of pizza you like and then an additional sentence, such as I really love pizza
*/
/*const favoritePizzas: string[] = ['Cheese', 'Tikka', 'BBQ Chicken'];

for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log('I really love pizza!');*/
/*
35.Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out
 the name of each animal. • Modify your program to print a statement about each
 animal, such as A dog would make a great pet. • Add a line at the end of your
 program stating what these animals have in common. You could print a sentence
 such as Any of these animals would make a great pet
*/
/*const commonAnimals: string[] = ['Chiken', 'Cat', 'Puppy'];

for (const animal of commonAnimals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log('Any of these animals would make a great pet.');*/
//Question No.36
/*
36.T-Shirt: Write a function called make_shirt() that accepts a size and the text
of a message that should be printed on the shirt. The function should print a
sentence summarizing the size of the shirt and the message printed on it. Call
the function
*/
/*function make_shirt(size: string, message: string): void {
    console.log(`The shirt is ${size} size and has the message: "${message}".`);
}

make_shirt("Large", "Hello, World!");*/
//Question No.37
/*
38.Cities: Write a function called describe_city() that accepts the name of a city
and its country. The function should print a simple sentence, such as Karachi is
in Pakistan. Give the parameter for the country a default value. Call your function
for three different cities, at least one of which is not in the default country.
*/
function describe_city(city, country = "Default Country") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi", "Pakistan");
describe_city("Paris", "France");
describe_city("Tokyo");
export {};
