// class car

class Car {
    constructor(name, brand, model, type, color, weight, age) {
      this.name = name;
      this.brand = brand;
      this.model = model;
      this.type = type;
      this.color = color;
      this.weight = weight;
      this.age = age;
    }
//   Properties (Variablen) cars

    showDetails() {
      const carDetails = document.getElementById('carDetails');
      carDetails.innerHTML += `
        <div class="details">
          <h2>${this.name} details:</h2>
          <p>Brand: ${this.brand}</p>
          <p>Model: ${this.model}</p>
          <p>Type: ${this.type}</p>
          <p>Color: ${this.color}</p>
          <p>Weight: ${this.weight} kg</p>
          <p>Age: ${this.age} years</p>
        </div>
      `;
    }
  }
  
//   class Animal
  class Animal {
    constructor(name, type, color, weight, age) {
      this.name = name;
      this.type = type;
      this.color = color;
      this.weight = weight;
      this.age = age;
    }
  
    // Properties (Variable) für Animals
    showDetails() {
      const animalDetails = document.getElementById('animalDetails');
      animalDetails.innerHTML += `
        <div class="details">
          <h2>${this.name} details:</h2>
          <p>Type: ${this.type}</p>
          <p>Color: ${this.color}</p>
          <p>Weight: ${this.weight} kg</p>
          <p>Age: ${this.age} years</p>
        </div>
      `;
    }
  }


//   class person
  class Person {
    constructor(name, gender, age, nationality, profession) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.nationality = nationality;
      this.profession = profession;
    }
  
// Properties (Variable) für Animals
    showDetails() {
      const personDetails = document.getElementById('personDetails');
      personDetails.innerHTML += `
        <div class="details">
          <h2>${this.name} details:</h2>
          <p>Gender: ${this.gender}</p>
          <p>Age: ${this.age} years</p>
          <p>Nationality: ${this.nationality}</p>
          <p>Profession: ${this.profession}</p>
        </div>
      `;
    }
  }

//   Objekte (const oder let)
//   const car1 = new Car('Car1', 'Toyota', 'Camry', 'Sedan', 'Red', 1500, 5);
//   const car2 = new Car('Car2', 'Honda', 'Civic', 'Sedan', 'Blue', 1400, 3);
//   const car3 = new Car('Car3', 'Ford', 'Mustang', 'Sports Car', 'Yellow', 1700, 2);
  
//   const animal1 = new Animal('Animal1', 'Dog', 'Brown', 20, 3);
//   const animal2 = new Animal('Animal2', 'Cat', 'White', 5, 2);
//   const animal3 = new Animal('Animal3', 'Tiger', 'Orange', 150, 7);
  
//   const person1 = new Person('Person1', 'Male', 30, 'American', 'Engineer');
//   const person2 = new Person('Person2', 'Female', 25, 'British', 'Doctor');
//   const person3 = new Person('Person3', 'Male', 40, 'French', 'Teacher');

// Variante 2 let


//   Objekte (const oder let)
let car1 = new Car('Car1', 'Toyota', 'Camry', 'Sedan', 'Red', 1500, 5);
let car2 = new Car('Car2', 'Honda', 'Civic', 'Sedan', 'Blue', 1400, 3);
let car3 = new Car('Car3', 'Ford', 'Mustang', 'Sports Car', 'Yellow', 1700, 2);

let animal1 = new Animal('Animal1', 'Dog', 'Brown', 20, 3);
let animal2 = new Animal('Animal2', 'Cat', 'White', 5, 2);
let animal3 = new Animal('Animal3', 'Tiger', 'Orange', 150, 7);

let person1 = new Person('Person1', 'Male', 30, 'American', 'Engineer');
let person2 = new Person('Person2', 'Female', 25, 'British', 'Doctor');
let person3 = new Person('Person3', 'Male', 40, 'French', 'Teacher');


//  Methoden

let printDiv=document.getElementById (`allDetails`);
document.innerHTML=${car1.showDetails();
car2.showDetails();
car3.showDetails();
  car1.showDetails();
  car2.showDetails();
  car3.showDetails();
  
  animal1.showDetails();
  animal2.showDetails();
  animal3.showDetails();
  
  person1.showDetails();
  person2.showDetails();
  person3.showDetails();
}