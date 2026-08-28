"use strict";
/*
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//both returns a number
console.log(Number("23"));
console.log(+"23");

//parsing only work when first part of the string is a number
console.log(Number.parseInt("30px"));
console.log(Number.parseInt("e24x"));

//see the differece between parse int and float int only return the integer value
console.log(Number.parseInt("2.5rem"));
console.log(Number.parseFloat("2.5rem"));

//nan is a special value in js so it's only checking weather the value is nan or not
console.log(Number.isNaN(23));
console.log(Number.isNaN("23"));
console.log(Number.isNaN("arpit"));
console.log(Number.isNaN(+"23"));
console.log(Number.isNaN(+"23x"));
console.log(Number.isNaN(23 / 0));

//is finite is the best way to find weather the no. is truly a number
console.log(Number.isFinite(23));
console.log(Number.isFinite("23"));
console.log(Number.isFinite("arpit"));
console.log(Number.isFinite(+"23"));
console.log(Number.isFinite(+"23x"));
console.log(Number.isFinite(23 / 0));

//is INteger
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.5));
console.log(Number.isInteger(23.0));

//sqrt root
console.log(Math.sqrt(144));
console.log(144 ** (1 / 2));
console.log(8 ** (1 / 3)); // cube root

//max it do type coersion but not parsing
console.log(Math.max(4, 25, 44, 32, 15));
console.log(Math.max(4, 25, "44", 32, 15));
console.log(Math.max(4, 25, "44x", 32, 15));

//min same as max
console.log(Math.min(4, 25, 44, 32, 15));
console.log(Math.min("4", 25, 44, 32, 15));
console.log(Math.min("4k", 25, 44, 32, 15));

//constant
console.log(Math.PI * Number.parseInt("10px") ** 2);

const randomInt = function (min, max) {
  return Math.trunc(Math.random() * (max - min + 1)) + min;
};

console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

const randomIntStrict = function (min, max) {
  return Math.trunc(Math.random() * (max - min - 1)) + min + 1;
};

console.log(randomIntStrict(10, 20));
console.log(randomIntStrict(0, 3));

//rounding go to the nearest number
console.log(Math.round(23.4));
console.log(Math.round(23.6));
//trunc only remove the decimal part
console.log(Math.trunc(23.9));
//floor best for use go to small side
console.log(Math.floor(23.9));
//ceil  go for the large side
console.log(Math.ceil(23.1));

//floor and trunc although work same but only for positive numbers
console.log(Math.trunc(-23.9));
console.log(Math.floor(-23.9));

//tofixed
console.log((2.7).toFixed());
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.344).toFixed(2));

//remainder operator
const isEven = function (num) {
  return num % 2 === 0 ? "yes it is even" : "not even";
};
console.log(isEven(25));
console.log(isEven(46));

//numeric seperator _ is used for seperating a large no. also it is ignored by js and you can only use it between the no.
let num = 2_876_548_900_000;
console.log(num);
//but this not work same with string
num = "234_000";
console.log(Number(num));
console.log(parseInt(num));

console.log(4523689524476633256855522);
console.log(4523689524476633256855522n);
console.log(BigInt(4523689524476633256855522));
//you can perform operation on bigint but they both need to be big int

let huge = 25648464641894951615164n;
num = 23;
console.log(huge * BigInt(num));

console.log(20n > 15);
console.log(20n === 20);

console.log(10n / 3n);
console.log(10 / 3);

const calcDayPassed = function (date1, date2) {
  return (date2 - date1) / (24 * 60 * 60 * 1000);
};

console.log(calcDayPassed(new Date(2026, 9, 10), new Date(2026, 9, 15)));


const num = 231456983;
const options = {
  // style: "unit",
  // unit: "mile-per-hour",
  // unit: "celsius",
  style: "currency",
  currency: "INR",
};
console.log(new Intl.NumberFormat("en-IN", options).format(num));


const arr = ["olives", ""];
const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`your order is here with ${ing1} and ${ing2}`);
  },
  3000,
  ...arr,
);

console.log("waiting");
if (arr.includes("spinach")) clearTimeout(pizzaTimer);

setInterval(() => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  console.log(`🕐 ${time}`);
}, 1000);
*/
