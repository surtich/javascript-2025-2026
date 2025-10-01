function Person(firstName) {
  this.firstName = firstName;
}

Person.prototype.greet = function(greeting) {
  return greeting + ' ' + this.firstName + '!';
};

function Student(firstName, grade) {
  Person.call(this, firstName);
  this.grade = grade;
}

function F() {
}

F.prototype = Person.prototype;

Student.prototype = new F();

Student.prototype.getGrade = function() {
    return this.grade;
}


const student1 = new Student("Pepe", "Cliente");
console.log(student1.greet("Hola")); // "Hola Pepe!"
console.log(student1.getGrade()); // "Cliente"

const person1 = new Person("Ana");
console.log(person1.greet("Hola")); // "Hola Ana!"
// console.log(person1.getGrade()); // Error: person1.getGrade is not a function    