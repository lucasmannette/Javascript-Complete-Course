//Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);



var Animal = function(name, numOfLegs, country) {
    this.name = name;
    this.numOfLegs = numOfLegs;
    this.country = country;
}

var cougar = new Animal ('Cougar',4,'Africa');
console.log(cougar);

Animal.prototype.numOfToesPerFoot = this.numOfToesPerFoot;

cougar.numOfToesPerFoot = 10;
console.log(cougar.numOfToesPerFoot);

console.log(cougar);

Animal.prototype.totalNumOfToes = function() {
    this.totalToes = this.numOfToesPerFoot * this.numOfLegs;
}

cougar.totalNumOfToes();

console.log(cougar.totalToes);
*/

//Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
*/

//Primitives Vs. Objects

/*
//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Object
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Libson'
};

function change(a,b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age,obj);
console.log(age);
console.log(obj.city);
*/

//Passing functions as arguments

/*
var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//callback functions
function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    }
    else {
        return -1;
    }
}

var ages = arrayCalc(years,calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rate = arrayCalc(ages, maxHeartRate);
console.log(rate);

*/

//Lecture: functions returning functions

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

//double call
interviewQuestion('teacher')('Mark');

function soManyQuestions(el) {
    if (el === 'potato') {
        return function(el) {
            console.log('You are a toy story character. ' + el);
        }
    } else if (el === 'underpants') {
        return function(el) {
            console.log('You are in a comic book! ' + el);    
        }
    }
}

soManyQuestions('potato')('Luke');
soManyQuestions('underpants')('Captian');

var potatoQuestion = soManyQuestions('potato');
potatoQuestion('Timmy');
potatoQuestion('Tony the TIGERRR');
*/

//Lecture: IIFE immediately invoked function expressions

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/
/*
(
    function() {
        var score = Math.random() * 10;
        console.log(score >= 5);
    }
)
();

(
    function(goodLuck) {
        var score = Math.random() * 10;
        console.log(score >= 5 - goodLuck);
    }
)
(5);
*/


//////////////////////////////////////////////////////////
//Lecture: Closures
//inner function has access to outter function params
//even after its returned
//scope chain always stays intact

/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    } 
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceLand = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementUS(1990);

//retirementUS(1990);
//retirement(66)(1990);

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
*/

//interViewQuestion with the power of CLOSURES!!!

function interviewQuestion(job) {
    return function(name) {
       if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?'); 
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var designerQuestion = interviewQuestion('designer');
var teacherQuestion = interviewQuestion('designer');
var designerQuestion = interviewQuestion('designer');

















