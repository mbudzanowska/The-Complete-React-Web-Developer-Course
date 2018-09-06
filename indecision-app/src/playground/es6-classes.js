class Person {
    constructor(name = 'Anonymous', age=0){
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age,  major){
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `Their major is ${this.major}`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(location){
            greeting += ` ${this.name} is in ${this.location} now`
        }
        return greeting
    }
}

const me = new Student('Marysia Budzanowska', 23, 'computer science');
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());

const other = new Student();
console.log(other)
console.log(other.getGreeting());
console.log(other.getDescription());
console.log(other.hasMajor());

const other2 = new Traveler('Mike', 32, 'Warsaw');
console.log(other2)
console.log(other2.getGreeting());
console.log(other2.getDescription());
