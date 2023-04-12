"use strict";

const WELCOME_MESSAGE = `Hello World!`;

const myNumber = 123;
const myFloatNumber = 12.5;

const isLoggedIn = true;

let emptyBox = null;

let changeableVar;
console.log("This is my number:", myNumber);
// alert(myNumber);

// const isConfirmed = confirm("Zgadzasz się?");
// console.log("isConfirmed:", isConfirmed);

// const userMessage = prompt("Twoja opinia:");

// const x = 10;
// const y = 5;
//
// // Dodawanie
// console.log(x + y); // 15
//
// // Odejmowanie
// console.log(x - y); // 5
//
// // Mnożenie
// console.log(x * y); // 50
//
// // Dzielenie
// console.log(x / y); // 2
//
// // Reszta po dzieleniu
// console.log(x % y); // 0
//
// // Dodawanie i przypisanie
// let value = 5;
//
// // Skrócony zapis: value = value + 10;
// value += 10;
// console.log(value); // 15

// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y);// false
// console.log("x < y:", x < y);// true
// console.log("x < z:", x < z);// false
// console.log("x <= z:", x <= z);// true
// console.log("x === y:", x === y);// false
// console.log("x === z:", x === z);// true
// console.log("x !== y:", x !== y);// true
// console.log("x !== z:", x !== z);// false

// console.log("5" == 5);

// console.log("5" === 5);

// console.log(5 === "5");// false
// console.log(5 === 5);// true
// console.log(5 !== "5");// true
// console.log(5 !== 5);// false
// console.log(1 === true);// false
// console.log(1 !== true);// true

// const myString = "5";
// console.log(typeof Number(myString));

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("GBP5")); // NaN
// console.log(Number.parseInt("qweqwe")); // NaN

// console.log(Number.parseFloat("5px"));// 5
// console.log(Number.parseFloat("12qwe74"));// 12
// console.log(Number.parseFloat("12.46qwe79"));// 12.46
// console.log(Number.parseFloat("qweqwe"));// NaN
// console.log(Number.parseFloat("5,32"));// 5

// const validNumber = Number("51");// 51
// console.log(Number.isNaN(validNumber));// false

// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);
//
// console.log(0.17 + 0.24);// 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100);// 0.41



// // Math.floor(num) - zwraca największą całkowitą liczbę,
// // mniejszą, lub równą podanej liczbie, czyli zaokrągla w dół.
// console.log(Math.floor(1.7)); // 1
//
// // Math.ceil(num) - zwraca najmniejszą całkowitą liczbę,
// // większą, lub równą podanej liczbie, czyli zaokrągla w górę.
// console.log(Math.ceil(1.2)); // 2
//
// // Math.round(num) - zwraca wartość liczby,
// // zaokrągloną do najbliższej liczby całkowitej
// // wedle zasad znanych ze szkoły
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2
//
// // Math.max(num1, num2, ...) - zwraca największą liczbę z podanych
// console.log(Math.max(20, 10, 50, 40)); // 50
//
// // Math.min(num1, num2, ...) - zwraca najmniejszą liczbę z podanych
// console.log(Math.min(20, 10, 50, 40)); // 10
//
// // Math.pow(base, exponent) - operacja potęgowania
// console.log(Math.pow(2, 4)); // 2^4 === 16
//
// // Math.random() - zwraca zmiennoprzecinkową liczbę pseudolosową
// // z zakresu [0, 1)
// console.log(Math.random()); // pseudolosowa losowa liczba pomiędzy 0 i 1
// console.log(Math.random() * (10 - 1) + 1); // pseudolosowa liczba od 1 do 10

// const text = "Hello World!" + "***";
// console.log(text);
// console.log(1 + "2");// "12"
// console.log(1 + "2" + 4);// "124"
// console.log(1 + 2 + "4");// "34"

// console.log(`A to dodałem!`.indexOf('xxxx'));
// console.log(`A to dodałem!`.includes('xxxx'));
// console.log(`A to dodałem!`.replace('dodałem', 'odjąłem'));
//
// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"


const output = document.querySelector('#js-output');
output.innerHTML = "Hello World!";
