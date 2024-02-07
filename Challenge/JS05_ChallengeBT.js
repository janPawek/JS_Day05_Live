// Array
// const data = [
//     'Ford Mustang',
//     'Audi A4',
//     'BMW X1',
//     'Chevrolet Camaro',
//     'Dodge Charger',
//     'Mercedes S-Klasse',
//     'VW ID4',
//     'Tesla Y',
//     'Renault Megane'
//   ];
  // declare empty Array - it will push each object which is created from class car
  let cars = [];
  class Car {
    constructor(make,model,year,color,mileage,img){
      this.make = make;
      this.model= model;
      this.year = year;
      this.color = color;
      this.mileage = mileage;
      this.img = img;
      cars.push(this);
    }
    // this function just to print our cars in browser
    printcar(){
      return `
      <div>
      <div class="card my-2" >
      <img src="${this.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Model& Make : ${this.model} ${this.model}</h5>
        <a  class="btn btn-primary details">More Details</a>
      </div>
    </div>
    </div>
      `
    }
    // this function to give us more details about a specific car that we click on it
    details(){
      return `
      <div class="card my-5 mx-auto" style="width: 50rem;">
      <img src="${this.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Model & Make : ${this.model} ${this.model}</h5>
        <p class="card-text">Year : ${this.year}</p>
        <p class="card-text">color : ${this.color}</p>
        <p class="card-text">mileage : ${this.mileage}</p>
        <a  class="btn btn-danger" id="hide">Hide</a>
      </div>
    </div>
      `
    }
  }

  let car1 = new Car("VW","ID.4",2022,"silver",15000,"media/img/vw.png");
  let car2 = new Car("Tesla","Y",2023,"black",32000,"media/img/tesla.png");
  let car3 = new Car("Renault","Megane",2019,"blue",122000,"media/img/Renault.png");
  let car4 = new Car("Ford","Mustang",2020,"black",92000,"media/img/mustang.png");
  let car5 = new Car("Mercedes","S-Class",2022,"black",15000,"media/img/mercedes.png");
  let car6 = new Car("Dodge","Charger",2021,"white",35000,"media/img/dodge.png");
  let car7 = new Car("Chevrolet","Camaro",2022,"red",12000,"media/img/Chevrolet.png");
  let car8 = new Car("BMW","X1",2023,"silver",42000,"media/img/BMW.png");
  let car9 = new Car("Audi","A4 Combi",2018,"black",134000,"media/img/audi.png");

 for(let val of cars){
  document.getElementById("result").innerHTML += val.printcar();
 }

 let btns = document.querySelectorAll(".details");
 btns.forEach((element,i) => {
    element.addEventListener("click",function(){
      document.getElementById("details").innerHTML = cars[i].details();
      document.getElementById("hide").addEventListener("click",function(){
        document.getElementById("details").innerHTML = "";
      })
    })

    
 });


//   const carsss = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         year: 2022,
//         color: "Blue",
//         mileage: 15000,
//         img : "media/img/audi.png"
//     },
//     {
//         make: "Honda",
//         model: "Civic",
//         year: 2020,
//         color: "Red",
//         mileage: 20000,
//         img : "media/img/audi.png"
//     },
//     {
//         make: "Ford",
//         model: "Fusion",
//         year: 2019,
//         color: "Black",
//         mileage: 30000,
//         img : "media/img/audi.png"
//     },
//     {
//         make: "Chevrolet",
//         model: "Malibu",
//         year: 2021,
//         color: "White",
//         mileage: 25000,
//         img : "media/img/audi.png"
//     },
//     {
//         make: "BMW",
//         model: "3 Series",
//         year: 2023,
//         color: "Silver",
//         mileage: 10000,
//         img : "media/img/audi.png"
//     },
//     {
//         make: "Mercedes-Benz",
//         model: "E-Class",
//         year: 2020,
//         color: "Grey",
//         mileage: 18000,
//         img : "media/img/audi.png"
//     },
//     {
//         make: "Audi",
//         model: "A4",
//         year: 2022,
//         color: "Green",
//         mileage: 12000,
//         img : "media/img/audi.png"
//     },
//     {
//         make: "Hyundai",
//         model: "Sonata",
//         year: 2021,
//         color: "Yellow",
//         mileage: 22000,
//         img : "media/img/audi.png"
//     },
//     {
//         make: "Nissan",
//         model: "Altima",
//         year: 2019,
//         color: "Orange",
//         mileage: 28000,
//         img : "media/img/audi.png"
//     },
//     {
//         make: "Kia",
//         model: "Optima",
//         year: 2020,
//         color: "Purple",
//         mileage: 21000,
//         img : "media/img/audi.png"
//     }
// ];

  

  