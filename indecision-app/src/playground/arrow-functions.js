const square = function (x) {
    return x*x
}

// const squareArrow = (x) => {
//     return x * x
// }

const squareArrow = (x) => x * x;

console.log(squareArrow(5))

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];

};

const getFirstNameArr = fullName => fullName.split(' ')[0];

console.log(getFirstNameArr('Maria Budzanowska'))