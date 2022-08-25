'use strict';
 // 208. Constructor Functions and the new Operator
/*
 const Person = function(firstName, birthYear){
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never do this
    // this.calcAge = function(){
    //     console.log(2037 - this.birthYear);
    // };
};
 
const mico =  new Person('Mico', 2002);
console.log(mico);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} Linked to prototype
// 4. funtion automatically return {} 

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

Person.hey = function() {
    console.log('Hey there :>');
    console.log(this);
};

Person.hey();


// console.log(matilda, jack);
*/
/////////////// 209. Prototypes /////////////
// console.log(Person.prototype);
/*
Person.prototype.calcAge = function(){
        // console.log(2037 - this.birthYear);
};

mico.calcAge();
matilda.calcAge();
jack.calcAge();

// console.log(mico.__proto__);
// console.log(mico.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(mico));

Person.prototype.species = 'Homo Sapiens';
// console.log(mico.species, matilda.species);

// console.log(mico.__proto__);
// Object.prototype (top of prototype chain)
// console.log(mico.__proto__.__proto__);
// console.log(mico.__proto__.__proto__.__proto__); // null

// console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 4, 5, 6, 9, 3] // new Array === []
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
    return [...new Set(this)];
}

// console.log(arr.unique());

const h1 = document.querySelector('h1');
*/
// 212. Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and 
a speed property. The speed property is the current speed of the car in 
km/h;
2. Implement an 'accelerate' method that will increase the car's speed 
by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, 
and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and '
brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} kmm/h`);
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} kmm/h`);
}


const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes',95);
console.log(bmw, mercedes);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.brake();
*/

//////////// 213. ES6 Classes //////////////

// class expression
// const PersonCl = clas {}
/*
// class declaration
class PersonCl {
    constructor (fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear; 
    }
    
    // Instance method
    // Mehods will be added to .prototype property
    calcAge () {
        console.log(2037 - this.birthYear);
    }

    greet () {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear
    }
    // Set property that already exist
    set fullName(name) {
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }

    get fullName() {
        return this._fullName;
    }

    // Static Mehod
    static hey() {
    console.log('Hey there :>');
    console.log(this);
    }
};

const jessica = new PersonCl('Jessica Davis', 1996)
console.log(jessica);
jessica.calcAge();
console.log(jessica.age)

// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// }
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first class citizes
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965)

PersonCl.hey();
*/
// 214. Setters and Getters
/*
const account = {
    owner : 'jonas',
    movements : [200, 530, 120, 300],
    
    get  latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
}

console.log(account.latest);


account.latest = 50
console.log(account.movements);
*/

// 216. Object.create
/*
const PersonProto = {
    calcAge () {
        console.log(2037 - this.birthYear);
    },

    init (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sara', 1979);
sarah.calcAge();
*/

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in 
mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h 
(but converts it to km/h before storing the value, by multiplying the 
input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, 
and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h
*/

/*
class CarCl {
     constructor(make, speed) {
    this.make = make;
    this.speed = speed;
}

    accelerate (){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} kmm/h`);
}

    brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} kmm/h`);
}
    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed)
    this.speed = speed * 1.6
}



const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford);
*/

// 218. Inheritance Between "Classes": Constructor Functions ////////
/*
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking protoype //
Student.prototype = Object.create(Person.prototype)


Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I studied ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
// mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
// console.log(mike instanceof Perosn);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);
*/

// 219. Coding Challenge #3
/* 
1. Use a constructor function to implement an Electric Car (called EV) as 
a CHILD "class" of Car. Besides a make and current speed, the EV also
has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' 
and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed 
by 20, and decrease the charge by 1%. Then log a message like this: 
'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 
'accelerate', 'brake' and 'chargeBattery' (charge to 90%). 
Notice what happens when you 'accelerate'! HINT: Review the definiton 
of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
console.log('-------- my Answer ------------');
class Car {
    constructor (CarEv, speed, chargeTo) {
        this.CarEv = CarEv;
        this.speed = speed;
        this.chargeTo = chargeTo;
    }

    chargeBattery() {
        this.chargeTo = this.chargeTo 
    }

    accelerate() {
        this.speed += 20;
        this.chargeTo -= 1;
        console.log(`${this.CarEv} going at ${this.speed} km/h, with a charge of ${this.chargeTo}%`);
    }
}

const tesla = new Car ('Tesla', 120, 23)
tesla.accelerate();
////////////////////////////////////////////////////
console.log('----------- answer ----------');
*/
const Car = function (make, speed) {
   this.make = make;
   this.speed = speed;
};

   Car.prototype.accelerate = function() {
   this.speed += 10;
   console.log(`${this.make} is going at ${this.speed} kmm/h`);
};

   Car.prototype.brake = function() {
   this.speed -= 5;
   console.log(`${this.make} is going at ${this.speed} kmm/h`);
};


// const EV = function(make, speed, charge) {
//     Car1.call(this, make, speed)
//     this.cahrge = charge;
// }

// // Link prototype
// EV.prototype = Object.create(Car1.prototype);

// EV.prototype.chargeBattery = function(chargeTo) {
//     this.cahrge = chargeTo;
// };

// EV.prototype.accelerate = function() {
//     this.speed += 20
//     this.charge --;
//     console.log(
//         `${this.make} going at ${this.speed} km/h, with a charge 
//         of ${this.charge}%`)
// }

// const tesla1 = new EV('Tesla', 120, 23);
// console.log(tesla1);

// tesla1.chargeBattery(90)


// tesla1.brake();
// tesla1.accelerate();


// 220. Inheritance Between "Classes": ES6 Classes
/*

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName =fullName;
        this.birthYear = birthYear;
    }

    // Instance method
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(" ")) this._fullname = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullname;
    }

    // Static methodd
    static hey() {
        console.log('Hey there');
    }
}
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
    // Always needs to happen first!
        super(fullName, birthYear);
        this.course = course;
    }

    introduce () {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} years old,
        but as a student I feel more like ${2037- this.birthYear + 10}`
        );
    }

}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
*/

// 221. Inheritance Between "Classes": Object.create
/*
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birhtYear);
    },

    init (firstName, birthYear) {
        this.firstName = firstName;
        this.birhtYear = birthYear;
    },
}

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName,birthYear,course ) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science')
jay.introduce();
jay.calcAge();
*/

// 222. Another Class Example &
// 223. Encapsulation: Protected Properties and Methods (use '_') &
// 224. Encapsulation: Private Class Fields and Methods

// 1) Public fields (_)
// 2) Private field (#)
// 3) Public methods 
// 4) Private methods
// (there is also the static version)
/*
class Account {
    // 1) Public fields (instances)
    locale = navigator.language;
    // _movements = [];

    // 2) Private fields (instances)
    // #movements = [];
    // #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency =currency;
        // Protected property
        this._pin = pin;
        this._movements = []
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }
    // 3) Public Methods

    // Public interface
    getMovements() {
        return this._movements;
    }


    deposit(val) {
        this._movements.push(val)
        return this;
    }

    withdraw(val) {
        this.deposit(-val)
        return this;
    }
    
    _approveLoan() {
        return true;
    }

    requetLoan(val) {
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan Approved`);
            return this;
        }
    }
    // static version
    static helper() {
        console.log('Helper');
    }

    // 4) Private methods
    // #approveLoan() {
    //     return true;
    // }
    
}

const acc1 = new Account ('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140)
acc1.requetLoan(1000);
acc1._approveLoan(1000);

console.log(acc1.getMovements());

console.log(acc1);
Account.helper()

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan);

// 225. Chaining Methods
acc1.deposit(300).deposit(500).withdraw(35)
.requetLoan(25000).withdraw(4000)
console.log(acc1.getMovements());
*/


// 227. Coding Challenge #4
/* 
1. Re-create challenge #3, but this time using ES6 classes: create an '
EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' 
methods of this class, and also update the 'brake' method in the 'CarCl' 
class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    
    break() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h}`);
    }

    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(speed) {
        this.speed = speed * 1.6
    }
}

class EVCL extends CarCl {

constructor(make, speed, charge) {
    CarCl.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.charBattery = function(chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge --;
    console.log(
        `${this.make} is going at ${this.speed} km/h, with a charge of
        ${this.carge}`
    );
  };
}
