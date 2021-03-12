// let js = "amazing";
// // if (js === "amazing") alert("JS is FUN");

// let firstName = "Elango";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = "Typing";
// let myCurrentJob = "Full Stack Developer";

// console.log(firstName);
// console.log(myFirstJob);
// console.log(myCurrentJob);

// // Assignment
// let country = "India";
// let continent = "Asia";
// let population = 108;

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(typeof population);
// -------------------------------------------------------------------------------------

// // 13 let, const and variable
// let age = 31;
// const birthYear = 1994;
// elango = "is my name";
// -------------------------------------------------------------------------------------

// // 14 basic operators
// // Math operators
// const now = 2021;
// const elangoBirthYear = 1994;
// const elangoAge = now - elangoBirthYear;
// console.log(elangoAge);

// // Assignment operators
// const fullAge = 18;
// let x = 10 + 5;
// x += 10;
// x++;
// x--;
// console.log(x);

// // comparison operators
// const isElangoFullAge = elangoAge >= fullAge;
// console.log(isElangoFullAge);
// ----------------------------------------------------------------

// // 15 operator precedence
// const now = 2037;
// const ageElango = 1994;
// const ageMoni = 2000;
// console.log(now - ageElango > now - ageMoni);

// let x, y;
// x = y = 10 + 5 + 10;
// console.log(x, y);
// ----------------------------------------------------------------

// // 16 coding challenge
// let marksWeight = 78;
// let marksHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.92;

// let marksBMI = marksWeight / marksHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;
// let markHigherBMI = marksBMI > johnBMI;
// console.log(marksBMI, johnBMI, markHigherBMI);

// marksWeight = 95;
// marksHeight = 1.89;
// johnWeight = 85;
// johnHeight = 1.76;

// marksBMI = marksWeight / marksHeight ** 2;
// johnBMI = johnWeight / johnHeight ** 2;
// markHigherBMI = marksBMI > johnBMI;
// console.log(marksBMI, johnBMI, markHigherBMI);
// ----------------------------------------------------------------

// // 17 Strings and String Literals
// let name = "Elango";
// let job = "web developer";
// const birthYear = 1994;
// const currentYear = 2021;

// console.log(
//   "I am " +
//     name +
//     ", a " +
//     (currentYear - birthYear) +
//     " years old " +
//     job +
//     "!"
// );

// console.log(`I am ${name}, a ${currentYear - birthYear} years old ${job} !`);

// console.log("I am \nElango \na web developer");
// console.log(`I am
// Elango
// a web developer`);
// ----------------------------------------------------------------

// // 18 if else statements
// let age = 21;
// const eligibleAge = 18;
// if (age > eligibleAge) {
//   console.log(`Person is allowed to take license 😘`);
// } else {
//   console.log(
//     `Person should wait for ${eligibleAge - age} years for registration 😔`
//   );
// }
// ----------------------------------------------------------------

// 19 coding challenge 2
let marksWeight = 78;
let marksHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.92;

let marksBMI = marksWeight / marksHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
if (marksBMI > johnBMI) {
  console.log(`Marks BMI is higher than john. BMI is ${marksBMI}`);
} else {
  console.log(`John BMI is higher than Marks. BMI is ${johnBMI}`);
}
