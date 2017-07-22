//Lecture: Variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

//Lecture: Variables 2
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

/*
job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job
+ '. Is he married?  ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job
+ '. Is he married?  ' + isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job
+ '. Is he married?  ' + isMarried + '.');
*/

//Lecture: Operators
/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);

var ageOfJohn = 30;
var ageOfMark = 30;

ageOfJohn = ageOfMark = (3 + 5) * 4 - 6;
//ageOfJohn = ageOfMark = 26;
//ageOfJohn = 26
ageOfJohn++;
ageOfMark *= 2;
console.log(ageOfJohn);
console.log(ageOfMark);
*/

////////////////////////////////////////////////
//Lecture: if/else statements

/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon');
}

isMarried = false;

/*
if(isMarried) {
    console.log('YES!');
}
else {
    console.log('NO!');

}
*/
/*
if (isMarried) {
    console.log('YES!');
}

if (23 === '23') {
    console.log('Something to print...');
}
*/

//////////////////////////////////////////////////////
//Lecture: boolean logic and switch

/*
var age = 25;

if (age < 20) {
    console.log('John is a teenager.');
} 
else if (age > 20 && age < 30) {
    console.log('John is a young man.');
}
else {
    console.log('John is a man.');
}

var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids')
        break;
    case 'driver':
        console.log('John drivers a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
        break;
}
*/

////////////////////////////////////
//Lecture: Coding Challenge 1

/*
var lukeHeigth = 3500;
var lukeAge = 50;

var johnHeight = 3500;
var johnAge = 50;

var bobHeight = 3600;
var bobAge = 50;

var lukeScore = lukeHeigth + (lukeAge * 5); 
var johnScore = johnHeight + (johnAge * 5);
var bobScore = bobHeight + (bobAge * 5);


if (lukeScore > johnScore && lukeScore > bobScore) {
    console.log('Luke wins with a score of ' + lukeScore);
}
else if (johnScore > lukeScore && johnScore > bobScore) {
    console.log('John wins with a score of ' + johnScore);
}
else if (bobScore > lukeScore && bobScore > johnScore) {
    console.log('Bob wins with a score of ' + bobScore);
}
else {
    console.log('Luke, John, and Bob tied');
}
*/

/////////////////////////////////////////////////////
//Lecture: Functions

/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageJohn);
console.log(ageMike);
console.log(ageMary);

function yearsUntilRetirement(name,year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement >= 0) {
        console.log(name + ' has ' + retirement + ' years until retirement.');    
    } else {
        console.log(name + ' has already retired.');
    }
    
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary',1948);
*/

///////////////////////////////////////////////
//Lecture: statements and expressions

/*
//statement nothing immediate
function someFunction(par) {
    //code
}
// if (x === 5){do someting}

//expression produces a value
var someFun = function(par) {
    //code
}
// 3 + 4;
// var x = 3;
*/

///////////////////////////////////////
//Lecture: Arrays

/*
var names = ['John','Jane','Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if (john.indexOf('designer') === -1) {
    console.log('John is not a teacher');
}
*/

//////////////////////////////////////////////////
//Lecture: Objects

/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john);
console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'Programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

//////////////////////////////////////////
//Lecture: Object Methods

//v1.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    //function expression
    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    }
};


console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/
//v2.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};
john.calculateAge();
console.log(john);
*/


////////////////////////////////////////////
//Lecture: Loops

/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}
*/

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

//for loops
/*
for (var i = 0; i < names.length; i++) {
    var element = names[i];
    console.log(element);
}

for (var i = names.length - 1; i >= 0; i--){
    console.log(names[i]);
}
*/

//while loops
/*
var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

// break and continue
for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
*/

/////////////////////////////////////////////////
//Lecture: Coding Challenge 2

/*
var years = [1990,1991,1992,1993,2000,2005];
var years2 = [1970,1985,1991,2010,2015,1900];
var just = [];

for (var i = 0; i < years.length; i++) {
    just.push(years[i]);
}

for (var i = 0; i < just.length; i++) {
    getAge(just[i]);
}

function getAge(yearBorn) {
    var age = 2017 - yearBorn;
    if (age >= 18) {
        console.log('Full Age ' + age);
    }
    else {
        console.log('Not Full Age ' + age);
    }
}

function getAgeWithResult(yearBorn,myResults) {
    var age = 2017 - yearBorn;
    if (age >= 18) {
        console.log('Full Age ' + age);
        myResults.push(true);
    }
    else {
        console.log('Not Full Age ' + age);
        myResults.push(false);
    }
}

function printFullAge(yearBorn) {
    var just = [];
    var theResults = [];
    for (var i = 0; i < yearBorn.length; i++) {
        just.push(yearBorn[i]);
    }
    for (var i = 0; i < just.length; i++) {
        getAgeWithResult(just[i],theResults);
    }
    return theResults;
}

var full_1 = printFullAge(years);
var full_2 = printFullAge(years2);

console.log(years);
console.log(full_1);
console.log(years2);
console.log(full_2);
*/

