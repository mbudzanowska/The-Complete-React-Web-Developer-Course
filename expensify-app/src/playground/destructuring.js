// console.log('destructuring')

// const person = {
//     name: 'Andrew',
//     age: 35,
//     location: {
//         city: 'Philadelpia',
//         temp: 92
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

const address = ['1299 S Jupiter Street', 'Philadelphia', 'Pensylvania', '32132'];


const [, city, state, zip] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['coffee', '$2.00', '$2.50', '$2.75'];
const [coffee, ,mediumPrize] = item;
console.log(`A medium ${coffee} cost ${mediumPrize}`);
