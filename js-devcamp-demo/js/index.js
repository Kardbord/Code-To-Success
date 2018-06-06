// Intro to JS
function intro() {
    var name, city, age;
    name = "Kristine";
    city = "Scottsdale";
    age = 12;

    console.log(age);
    console.log(name);
    console.log(city);
}

// 'let' vs. 'var'
//
// let : not allowed to redeclare variable
// var : freedom to redeclare variable
function letDemo() {
    // This is allowed
    let say = "Hello";
    console.log(say);
    say = "Goodbye";
    console.log(say);

    // This is not allowed and will not work
    /*
    let say = "Hello"
    console.log(say);
    let say = "Goodbye"
    console.log(say);
    */
}

// Hoisting
function hoisting() {
    hoisted = "Hoisted";
    console.log(hoisted);
    // Despite the strange order of things, this works fine.
    var hoisted;

    // However, hoisting doesn't work when a variable is declared and assigned at the same time
    /*
    console.log(age);
    var age = 15;
    */
}

// Data types and type checking
function dataTypes() {
    // Boolean
    let truthy = true;
    console.log("Truthy = " + truthy);
    let falsey = false;
    console.log("Falsey = " + falsey);
    console.log("typeof truthy: " + typeof truthy);

    // Null
    let nully = null;
    console.log("Nully = " + nully);
    console.log("typeof nully: " + typeof nully);

    // Undefined
    var notDefined;
    console.log("notDefined = " + notDefined);
    console.log("typeof notDefined: " + typeof notDefined);

    // Number
    var num = 12;
    console.log("num = " + num);
    console.log("typeof num: " + typeof num);

    // String
    var myString =
        '"The quality of any advice anybody has to offer has to be judged against the quality of life they actually lead." -- Douglas Adams';
    console.log("myString = " + myString);
    var myString2 = "He knew where his towel was."; // -- Douglas Adams
    console.log("myString2 = " + myString2);
    console.log("typeof myString: " + typeof myString);

    // Symbol
    // Symbols cannot be changed, and there can only be one of them
    // Closest thing JS has to an immutable type
    var mySymbol = Symbol();
    console.log(mySymbol);
    var mySymbol2 = Symbol("foo");
    console.log(mySymbol2);
    console.log("typeof mySymbol: " + typeof mySymbol);

    // Objects
    var foo = { data: "bar" };
    console.log(foo);
    console.log("typeof foo: " + typeof foo);
}

// Objects
function objects() {
    // foo is an object
    var foo = { data: "bar" };
    console.log(foo);
    console.log(foo.data);
    foo.data = "asdf";
    console.log(foo.data);

    var book = {
        title: "Hitchhiker's Guide to the Galaxy",
        age: 42,
        silly: true,
        characters: {
            earth: "Arthur Dent",
            betulgeuse: "Ford"
        }
    };

    book.characters.president = "Zaphod Beeblebrox";

    console.log(book);
}

// Type casting
function typeCasting() {
    // Type coercion and all of its weirdness
    ex = "100" - 42; // => 58
    ex = "100" - null; // => 100
    ex = "100" + 42; // => 10042

    // Explicit type casting
    var ageOne = 12;
    String(ageOne);       // => "12"
    ageOne.to_string();   // => "12"
    var ageTwo = "33.5";
    Number(ageTwo);       // => 33.5
    parseInt(ageTwo);     // => 33
    parseFloat(ageTwo);   // => 33.5
    // commented due to warning given during analysis
    // + ageTwo; // => 33.5
    parseInt("5555555555 is my phone number"); // => 5555555555
    parseInt("my number is 5555555555"); // => NaN
    Number(true);  // => 1
    Number(false); // => 0 
}

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
function stringFunctions() {
    var str = 'the quick brown fox jumped over the lazy dog';
    // str.length; => 44
    str.charAt(2); // => e
    str.concat(' again and again'); // note that this does not permanently change the string
    // to permanently change the string, do str = str.concat(' again and again');
    str.includes('quick'); // => true
    str.includes('foo');   // => false

    str.startsWith('the');    // => true
    str.startsWith('Foo');    // => true
    str.endsWith('quick');    // => false
    str.endsWith('g');        // => true
    str.endsWith('lazy dog'); // => true

    // Note this does not alter str permanently
    str.repeat(5);     // => "The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog"

    // match searches for all instances
    str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/); // => null
    '(555)555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/); // => ["(555)555-5555", "(555)", "(555)", undefined]

    str.replace('fox', 'wolf'); // => "the quick brown wolf jumped over the lazy dog"

    // returns the beginning index of the located regex, in this case a phone number
    // returns -1 if nothing found
    '555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/); // => 0
    'foo'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/); // => -1
    'foo 555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/); // => 4

    // returns the first instance
    str.indexOf('jumped'); // => 20
    var str2 = str.concat('again and again');
    str2.indexOf('again'); // => 45
    // returns the last instance
    str2.lastIndexOf('again'); // => 55

    // returns everything from index 10 and after
    str.slice(10); // => "brown fox jumped over the lazy dog"
    // returns the last 8 indices
    str.slice(-8); // => "lazy dog"
    // returns the string between the given indices. The first index exclusive, last index inclusive
    str.slice(4, 9); // => "quick"A

    var messyString = '    foo    ';
    messyString.trim(); // => "foo"

    str.toUpperCase(); // => what you would expect
    str.toLowerCase(); // => what you would expect
}

// Math stuff
function arithmaticOperators() {
    // Skipping the common stuff
    var someNum = 100;
    var otherNum = -someNum; // => otherNum = -100

    var strNum = '100';
    var convertedNum = + strNum; // => convertedNum = 100
}

function orderOfOperations() {
    /*
     * PEMDAS => Please Excuse My Dear Aunt Sally
     * Paranthesis
     * Exponents
     * Multiplication
     * Division
     * Addition
     * Subtraction
     */

    var num = 5 + 5 * 10; // => 55
    // num = 5 + (5 * 10) / 6 ** 2 - 1; // => 5.38
}

function conditionals() {
    let strNum = "100";
    let num = 100;

    if (strNum == num) {
        console.log('darn you type coercion');
    }

    if (strNum === num) {
        console.log("This shouldn't be printed");
    }

    /*
     * Summary/Cheatsheet:
     * Type Coercion:
     *    ==
     *    !=
     * No Type Coercion
     *    ===
     *    !==
     *    <=
     *    >=
     *    >
     *    <
    */
}

function switchStatement(param) {
    switch (typeof param) {
        case "string":
            console.log("It's a string");
            break;
        case "number":
            console.log("It's a number");
            break;
        case "boolean":
            console.log("It's a boolean");
            break;
        default:
            console.log('No matches');
    }
}

// Scope Demonstration
function scope() {
    var userObj = {
        email: 'sample@example.com',
        fullName: 'Kristine Hudgens'
    };

    function dashboardGreeting() {
        var userObj = {
            email: 'sample2@example.com',
            fullName: 'Jordan Hudgens'
        };
        console.log("Hi there, ".concat(userObj.fullName));
    }

    dashboardGreeting();
    console.log(userObj.fullName);
}

function functionExpressions() {
    var greeting = function () { return 'Hi there!'; };
}

// Try running this without the language parameter
function paramExample(firstName, lastName, language) {
    language = language || 'English';
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

// JS passes objects by reference, and other variables by value.
// But it still manages to be weird about it.
// See https://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language
function referenceOrValue() {
    var changeStuff = function (a, b, c) {
        a = a * 10;
        b.item = "changed";
        c = { item: "changed" };
    };

    var num = 10;
    var obj1 = { item: "unchanged" };
    var obj2 = { item: "unchanged" };

    changeStuff(num, obj1, obj2);

    console.log(num);
    console.log(obj1.item);
    console.log(obj2.item);
}

function closureDemo() {
    var battingAverage = function () {
        var hits = 100;
        var atBats = 300;

        return {
            getCurrentAverage: function () {
                return hits / atBats;
            },
            updateHitsAndAtBats: function (hit, atBat) {
                hits += hit;
                atBats += atBat;
            },
        };
    };

    var stanton = battingAverage();
    console.log(stanton.getCurrentAverage());
    stanton.updateHitsAndAtBats(0, 20);
    console.log(stanton.getCurrentAverage());
}

// the 'this' keyword refers to an instance of an object
function thisDemo() {
    var guide = {
        title: 'Guide to Programming',
        content: 'Content goes here...',
        visibleToUser: function (viewingUserRole) {
            if (viewingUserRole === 'paid') {
                return true;
            } else { return false; }
        },
        renderContent: function (userRole) {
            // call visibleToUser on 'this' object instance
            if (this.visibleToUser(userRole)) {
                console.log(this.title + " - " + this.content);
            } else {
                this.content = '';
                console.log(this.title + " - " + this.content);
            }
        }
    };

    user = { role: 'paid' };
    guide.renderContent(user.role);
}

function arrayDemo() {
    var generatedArray = new Array(3); // [undefined, undefined, undefined]
    var generatedArray2 = new Array('Altuve', 'Correa', 'Spring');
    var literalArray = [1, 2, 3];
    var mixedArray = ['Hi', 1, ['a', 'b', 'c'], { name: 'Kristine' }];

    // literalArray.length // => 3
    literalArray.pop(); // => 3 ; note that literalArray is now [1, 2]
    literalArray.push(3); // => literalArray is now [1, 2, 3]
    literalArray.shift(); // => 1 ; note that literalArray is now [2, 3]
    literalArray.unshift(1); // => literalArray is now [1, 2, 3]

    var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];
    var foundElement = arr.indexOf('Correa');
    arr.splice(foundElement, 1); // ["Correa"]
    // arr is now ["Altuve", "Bregman", "Springer"]
    arr.splice(1, 2); // ["Bregman", "Springer"]
    // => arr is now ["Altuve"]
}

// Array Destructuring Demo
function arrayDestructuring() {
    const apiList = [
        'https://api.dailysmarty.com/posts',
        'https://api.github.com/users/jordanhudgens/repos',
        'https://api.github.com/users/jordanhudgens'
    ]

    const [posts, repos, profile] = apiList;

    console.log(posts);
    console.log(repos);
    console.log(profile);
}

function forLoopDemo() {
    var players = [
        'Altuve',
        'Bregman',
        'Correa',
        'Springer'
    ];

    for (var index in players) {
        console.log(players[index]);
    }

    for (var i = 0; i < players.length; ++i) {
        console.log(players[i]);
    }

    players.forEach(function (element) {
        console.log(element);
    });
}

function objectLoopDemo() {
    var student = {
        name: 'Kristine',
        age: 12,
        city: 'Scottsdale'
    };

    for (var key in student) {
        console.log(key + " => " + student[key]);
    }
}

function whileLoopDemo() {
    var players = [
        'Altuve',
        'Bregman',
        'Correa',
        'Springer'
    ];

    var i = 0;
    while (i < players.length) {
        console.log(players[i]);
        ++i;
    }

    i = 21;
    do {
        console.log(players[i]);
        ++i;
    } while (i < players.length);
}

function stringInterpolation() {
    // using concat operator
    let world = 'world';
    console.log("hello " + world);

    // using backticks
    console.log(`Hello`);
    console.log(`Hello ${world}`);
    console.log(`2 + 2 = ${2 + 2}`);

    // example with ternary operator
    const page = 'Home';
    console.log(`class=${page === 'Home' ? 'master-layout' : 'secondary-layout'}`);
}

function arrowFunctions() {
    // Same function written as function declaration
    function fullName(fName, lName) {
        console.log(`${lName}, ${fName}`);
    }
    fullName('Tiffany', 'Hudgens');

    // Same function written as function expression
    fullName1 = function (fName, lName) {
        console.log(`${lName}, ${fName}`);
    };
    fullName1('Kristine', 'Hudgens');

    // Basic arrow function
    helloWorld = () => { console.log("Hi there"); };
    helloWorld();

    // Arrow function with shorthand function argument for single arguments
    firstName = fname => { console.log(fname.toUpperCase()); };
    firstName('Jordan');

    // Arrow function with multiple arguments
    fullName2 = (fName, lName) => { console.log(`${lName}, ${fName}`); };
    fullName2('Kristine', 'Hudgens');
}

function arrowFunctions_thisKeyword() {
    function Invoice(subTotal) {
        this.taxRate = 0.06;
        this.subTotal = subTotal;

        this.total = setInterval(() => {
            console.log((this.taxRate * this.subTotal) + this.subTotal);
            // console.log(this); 
        }, 2000);
    }

    const inv = new Invoice(200);
    inv.total();
}

function variableDeconstruction() {

    // Using variable deconstruction for swapping
    let playerOne = 'Tiffany';
    let playerTwo = 'Kristine';
    [playerOne, playerTwo] = [playerTwo, playerOne];
    console.log(`\nPlayer One: ${playerOne}\nPlayer Two: ${playerTwo}\n`);

    // Passing objects as function arguments using deconstruction
    const user = {
        name: 'Kristine',
        email: 'kristine@devcamp.com'
    };
    // renderUser takes an object with a name key and an email key 
    const renderUser = ({ name, email }) => {
        console.log(`${name}: ${email}`);
    };
    renderUser(user);
}

function defaultObjectValues() {
    const blog = {
        title: 'My great post',
        summary: 'Summary of my post', // try commenting this line
    };

    const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {
        console.log(`og-title=${title}\nog-description=${summary}`);
    };
    openGraphMetadata(blog);
}

// OOP demo
// Object Oriented Programming Demo
function objectOrientedProgramming() {
    class Instructor {
        constructor({ name, role = 'assistant' }) {
            this.name = name;
            this.role = role;
        }

        renderDetails() {
            console.log(`${this.name}: ${this.role}`);
        }
    }

    const jon = new Instructor({ name: 'Jon Snow' });
    const brayden = new Instructor({ name: 'Brayden', role: 'teacher' });
    jon.renderDetails();
    brayden.renderDetails();
}

// Spread operator demo
function spreadOperator() {
    // Combining Arrays
    let shoppingCart = [345, 375, 765, 123];
    let newItems = [98, 123];
    shoppingCart.push(...newItems);
    console.log(shoppingCart); // [345, 375, 765, 123, 98, 123]

    // Copying Arrays
    const shoppingCart = [345, 375, 765, 123];
    const updatedCart = [...shoppingCart];
    updatedCart.push(5);
    console.log(updatedCart);
    console.log(shoppingCart);

    // In function arguments
    const orderTotals = [1, 5, 1, 10, 2, 3];
    console.log(Math.max(...orderTotals));

    // [1, 5, 1, 10, 2, 3]
    // ...[1, 5, 1, 10, 2, 3]
    // 1, 5, 1, 10, 2, 3

    // In object deconstruction
    const { starter, closer, ...relievers } = {
        starter: 'Verlander',
        closer: 'Giles',
        relief_1: 'Morton',
        relief_2: 'Gregerson'
    }

    console.log(starter);
    console.log(closer);
    console.log(relievers);
}

// Static methods vs. instance methods
function staticMethods() {
    class Instructor {
        constructor({ name, role = "assistant" } = {}) {
            this.role = role;
            this.name = name;
        }

        // Instance method
        renderDetails() {
            console.log(`${this.name} - ${this.role}`);
        }

        // Base case static method
        static helloWorld() {
            console.log('Hi there');
        }

        // Static method
        static canTeach(instructor) {
            return (instructor.role === 'classroom');
        }
    }

    let juniorInstructor = new Instructor({ 'name': 'Brian' });
    let seniorInstructor = new Instructor({ 'name': 'Alice', "role": "classroom" });

    juniorInstructor.renderDetails(); // "Brian - assistant"
    seniorInstructor.renderDetails(); // "Alice - classroom"

    Instructor.helloWorld(); // "Hi there"

    // "Brian can teach: false"
    console.log(
        `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
    );

    // "Alice can teach: true"
    console.log(
        `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
    );
}

// Introduction to promises
function promisesIntro() {
    let sleepyGreeting = new Promise((resolve, reject) => {
        setTimeout(() => {       //
            resolve('Hello...')  // comment out these lines to mimic a failure/reject 
        }, 2000);                // 

        setTimeout(() => {
            reject(Error('Too sleepy...'))
        }, 2000);
    });

    sleepyGreeting
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        });
}

// Using a fetch Promise to communicate with an API
function promisesWithAPI() {
    // console.log("Starting fetch call...")
    const postsPromise = fetch('https://api.dailysmarty.com/posts') // fetch() returns a promise object
    // console.log("After fetch call...")
    // console.log(postsPromise);
    // console.log("Program complete.")

    postsPromise
        .then(data => data.json()) // interpret the data as json
        .then(data => {            // then we can use the data as expected
            data.posts.forEach((item) => {
                console.log(item.title);
            });
        })
        .catch((err) => {
            console.log(err);
        })
}
