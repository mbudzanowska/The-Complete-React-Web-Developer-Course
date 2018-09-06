const add = (a, b) => {
    //console.log(arguments)
    return a* b;
}

console.log(add(2,4))

const user = {
    name: 'Mary',
    cities: ['Żary', 'Wroclaw'],
    printPlaceLived () {
        return this.cities.map(city => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlaceLived());

const multiplier = {
    numbers: [1,2,4],
    multiplyBy: 5,
    multiply () {
        return this.numbers.map(num => num * this.multiplyBy)
    }
}
console.log(multiplier.multiply())