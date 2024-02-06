// let fname = "John";
// let lname = "Doe";
// let age ="20";

// let student = ["John", "Doe", 20]

let trainer = {
    fname: "John",
    lname: "Doe",
    age: 20,
    gym: true,
    printinfo: function(){
        return `${this.fname} ${this.lname}, ${this.age}`;
    },
};

// this bezieht sich immer auf das Objekt in dem wir arbeiten. wir definieren einen class um bei einem Datensatz (sprich z.B. 100 Studenten) nicht 100 x mal den selben Code einzubauen. Zuerst die properties: fname, lname, age, gym)

// class Students{
//     fname; 
//     lname;
//     age;
//     gym;
// -------------- long version ------------
// ------------------short version------------------
class Students{
    uniform = true;



//    weil wir 4 properties: (fname, lname, age, gym) haben, nehmen wir 4 beliebige Namen oder Ziffern in constructor
    constructor(fname, lname, age, gym){
        this.fname = fname;
        this.lname = lname;
        // this.age = age;
        if(age < 18){
            this.age = 1;
        }else {
            this.age = age;
        }

        this.gym = this.gym;
    }
    printinfo(){
        return `${this.fname} ${lname}, ${this.age}`;
    }
}

class Teacher extends Students{
    constructor(fname, lname, age, gym, jobtitle){
        super(fname, lname, age, gym);
        this.salary = salery;
        this.jobtitle = jobtitle;
    }
    printinfo(){
        return `${super.printinfo()} with the salery of ${this.salary
        }, and work as ${this.jobtitle}`;
    }
}


// Nun legen wir die Studenten (sprich die Datensätze) an
let student2 = new Students("Mary", "Doe", -20, true);
let student3 = new Students("Johnny", "Doe", 42, true);

let Teacher = new Teacher("Test", "test 2", 30, false, 1900, "IT");
console.log(teacher.printinfo);

console.log(student2.age);


