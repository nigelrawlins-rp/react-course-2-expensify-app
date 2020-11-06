// const person = {
//     name: 'Nigel',
//     age: 36,
//     location: {
//         city: 'Merstham',
//         temp: 74
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// const address = ['16 Melton Road', 'Merstham', 'Surrey', 'RH13HB'];

// const [, town, county] = address;

// console.log(`You are in ${town} ${county}.`)

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [product, , mediumCost] = item;

console.log(`A medium ${product} costs ${mediumCost}.`);