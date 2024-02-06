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
class Motorbike extends Car {
    constructor(name, brand, model, wheels) {
      super(name, brand, model);
      this.wheels = wheels;
    }
  
    printInfo() {
        return `Name: ${this.name}, Brand: ${this.brand}, Model: ${this.model}, Wheels: ${this.wheels}`;
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
class Fish extends Animal {
    constructor(name, type, color, water) {
      super(name, type, color);
      this.water = water;
    }
  
    printInfo() {
        return `Name: ${this.name}, Type: ${this.type}, Color: ${this.color}, Water: ${this.water}`;
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
class Position extends Person {
    constructor(name, gender, age, jobposition) {
      super(name, gender, age);
      this.jobposition = jobposition;
    }
  
    printInfo() {
        return `Name: ${this.name}, Gender: ${this.gender}, Age: ${this.age}, Water: ${this.jobposition}`;
    }
}

// objects
let car1 = new Car("Car1", "Mercedes", "C Class", "Black");
let car2 = new Car("Car2", "Audi", "A3", "Red");
let car3 = new Car("Car3", "Chevrolet", "Chevy", "Beige");
let Motorbike1 = new Motorbike("Motorbike1", "Ducati", "2 wheels");
let Motorbike2 = new Motorbike("Motorbike2", "BMW", "2 wheels");
let Motorbike3 = new Motorbike("Motorbike3", "Harley-Davidson", "3 wheels");
let animal1 = new Animal("Animal1", "Dog", "black");
let animal2 = new Animal("Animal2", "Cat", "white");
let animal3 = new Animal("Animal3", "Bird", "striped");
let Fish1 = new Fish("Fish1", "Goldfish", "gold", "Freshwater");
let Fish2 = new Fish("Fish2", "Clownfish", "orange", "Saltwater");
let Fish3 = new Fish("Fish3", "Blue Tang", "blue", "Saltwater");
let person1 = new Person("Person1", "Male", "30");
let person2 = new Person("Person2", "Female", "25");
let person3 = new Person("Person3", "Male", "46");
let Position1 = new Position("Position1", "Male", 30, "Marketing-Expert");
let Position2 = new Position("Position2", "Female", 25, "Sales-Manager");
let Position3 = new Position("Position3", "Male", 46, "CEO");

// methods
let outputDiv = document.getElementById("output");
outputDiv.innerHTML += "<h2>Cars</h2>";
outputDiv.innerHTML += `<p>${car1.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${car2.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${car3.printInfo()}</p>`;
outputDiv.innerHTML += "<h2>Motorbike</h2>";
outputDiv.innerHTML += `<p>${Motorbike1.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${Motorbike2.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${Motorbike3.printInfo()}</p>`;
outputDiv.innerHTML += "<h2>Animals</h2>";
outputDiv.innerHTML += `<p>${animal1.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${animal2.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${animal3.printInfo()}</p>`;
outputDiv.innerHTML += "<h2>Fish</h2>";
outputDiv.innerHTML += `<p>${Fish1.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${Fish2.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${Fish3.printInfo()}</p>`;
outputDiv.innerHTML += "<h2>Persons</h2>";
outputDiv.innerHTML += `<p>${person1.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${person2.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${person3.printInfo()}</p>`;
outputDiv.innerHTML += "<h2>Position</h2>";
outputDiv.innerHTML += `<p>${Position1.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${Position2.printInfo()}</p>`;
outputDiv.innerHTML += `<p>${Position3.printInfo()}</p>`;