// const today = new Date().getDay();

// let day;
// switch (today) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }

// const fruits = ['apple', 'banana', 'mango', 'grapes', 'kiwi', 'dragon fruit']
// const fruitsLength = fruits.length;
// for (let i = 0; i < fruitsLength; i++) {
//     console.log(fruits[i]);
// }

// console.log('\n\n');
// const freshFruits = ['apple', 'banana', 'mango', 'grapes', 'kiwi', 'dragon fruit'];
// let index = 0;
// while (index < freshFruits.length) {
//     console.log(`hey there!!! I like ${freshFruits[index]}`);
//     index++;
// }

// const person = { fname: "John", lname: "Doe", age: 25 };

// let text = "";
// for (let x in person) {
//     text += person[x];
// }
// console.log('\n\n ' + text)

// const fruits = [{
//     id: 1,
//     name: 'mango',
//     price: 100,
//     quantity: 1,
// },
// {
//     id: 2,
//     name: 'banana',
//     price: 80,
//     quantity: 12,
// },
// {
//     id: 3,
//     name: 'apple',
//     price: 120,
//     quantity: 1,
// }]

// for (const fruit of fruits) {   
//     console.log(`I am ${fruit.name} and You can get me in ${fruit.quantity} pieces/piece for ${fruit.price} rupees`);
// }

function sum(firstNumber, secondNumber) {
    const sum = firstNumber + secondNumber;
    console.log(sum);
}

function difference(firstNumber, secondNumber) {
    const difference = firstNumber - secondNumber;
    console.log(difference);
}

function product(firstNumber, secondNumber) {
    const product = firstNumber * secondNumber;
    console.log(product);
}

const firstNumber = 10;
const secondNumber = 20;
sum(firstNumber, secondNumber);
difference(firstNumber, secondNumber);
product(firstNumber, secondNumber);
