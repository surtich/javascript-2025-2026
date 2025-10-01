class Person {
    constructor(firstName) {
        this.firstName = firstName;
    }

    greet(greeting) {
        return `${greeting} ${this.firstName}!`;
    }
}

class Student extends Person {
    constructor(firstName, grade) {
        super(firstName);
        this.grade = grade;
    }

    getGrade() {
        return this.grade;
    }
}

Student.prototype.toString = function() {
    return this.firstName + " ---- " + this.grade;
}

const student1 = new Student("Pepe", "Cliente");
console.log(student1.greet("Hola")); // "Hola Pepe!"
console.log(student1.getGrade()); // "Cliente"
console.log(student1.toString()); // "Cliente"


console.log("getGrade" in Student.prototype);

const person1 = new Person("Ana");
console.log(person1.greet("Hola")); // "Hola Ana!"
console.log("greet" in Person.prototype);
// console.log(person1.getGrade()); // Error: person1.getGrade is not a function
