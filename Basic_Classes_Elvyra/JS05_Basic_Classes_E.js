// classes
class Car {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    printInfo() {
        return `Name: ${this.name}, Brand: ${this.brand}, Model: ${this.model}`;
    }
}
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
    printInfo() {
        return `Name: ${this.name}, Type: ${this.type}, Color: ${this.color}`;
    }
}
class Person {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    printInfo() {
        return `Name: ${this.name}, Gender: ${this.gender}, Age: ${this.age}`;
    }
}
// objects
let car1 = new Car("Car1", "Mercedes", "C Class", "Black");
let car2 = new Car("Car2", "Audi", "A3", "Red");
let car3 = new Car("Car3", "Chevrolet", "Chevy", "Beige");
let animal1 = new Animal("Animal1", "Dog", "black");
let animal2 = new Animal("Animal2", "Cat", "white");
let animal3 = new Animal("Animal3", "Bird", "striped");
let person1 = new Person("Person1", "Male", 30);
let person2 = new Person("Person2", "Female", 25);
let person3 = new Person("Person3", "Male", 46);
// methods
let outputDiv = document.getElementById("output");
outputDiv.innerHTML += "<h2>Cars</h2>";
outputDiv.innerHTML += `<p>${car1.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${car2.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${car3.printInfo()}</p>`;
outputDiv.innerHTML += "<h2>Animals</h2>";
outputDiv.innerHTML += `<p>${animal1.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${animal2.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${animal3.printInfo()}</p>`;
outputDiv.innerHTML += "<h2>Persons</h2>";
outputDiv.innerHTML += `<p>${person1.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${person2.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${person3.printInfo()}</p>`;