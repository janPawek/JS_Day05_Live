// let fname = "John";
// let lname = "Doe";
// let age = 20;

// let student = ["John", "Doe", 20];

let students = [];

class Students {
  constructor(fname, lname, age, gym, uniform) {
    this.fname = fname;
    this.lname = lname;

    if (age < 1) {
      this.age = 18;
    } else {
      this.age = age;
    }

    this.gym = gym;
    this.uniform = uniform;

    students.push(this);
  }

  printInfo() {
    // return `${this.fname} ${this.lname}, ${this.age}`;
    return `
    <div class="card">
        <div class="card-body">
        <h5 class="card-title">${this.fname} ${this.lname}</h5>
        <p class="card-text">${this.age}</p>
        <a href="#" class="btn btn-primary mybtns">print in console</a>
        </div>
  </div>
    `;
  }
}

class Teacher extends Students {
  constructor(fname, lname, age, gym, uniform, salary, jobTitle) {
    super(fname, lname, age, gym, uniform);
    this.salary = salary;
    this.jobTitle = jobTitle;
  }

  printInfo() {
    return `${super.printInfo()} with the salary of ${
      this.salary
    }, and work as ${this.jobTitle}`;
  }
}

let student2 = new Students("Mary", "Doe", -20, true, false);
let student3 = new Students("Johnny 2", "Doe 2", 42, true, true);
let student4 = new Students("Johnny 3", "Doe 3", 42, true, true);
let student5 = new Students("Johnny 4", "Doe 4", 42, true, true);
let student6 = new Students("Johnny 5", "Doe 5", 42, true, true);
let student7 = new Students("Johnny 6", "Doe 6", 42, true, true);

console.table(students);

for (let val of students) {
  console.log(val);
  document.getElementById("result").innerHTML += val.printInfo();
}

let btns = document.querySelectorAll(".mybtns");

btns.forEach((element, i) => {
  element.addEventListener("click", function () {
    /* code snippet here */
    console.log(students[i].fname + " " + students[i].lname);
    document.getElementById("demo").innerHTML =
      students[i].fname + " " + students[i].lname;
  });
});

// let teacher = new Teacher("Test", "test 2", 30, true, false, 1900, "IT");
// console.log(teacher.printInfo());

// console.log(student2.age);

// console.log(new Date())
