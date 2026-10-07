function showMessage() {
    console.log(message);

    var message = "Hello";

    console.log(message);
}

showMessage();

console.log(city);

var city = "Haridwar";

console.log(city);


var name = "global";

function test() {
    console.log(name);

    var name = "local";
}

test();

console.log(food);

var food = "Pizza";

console.log(food);

function square(n) {
    return n * n;
}

console.log(square(4));

function square(n) {
    return n * n;
}


//Tast 2.1//

//Task 2.2//

//Task 2.4 — Same Function Name//

console.log(fnA());

function fnA() {
    return "First";
}

function fnA() {
    return "Second";
}

//PART 3 — let, const & TDZ//

//Task 3.1//
//Task 3.2 — typeof Surprise//



//PART 4 — Your First Closure//


//Task 4.1 — Counter//

function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counterA = makeCounter();
const counterB = makeCounter();

console.log(counterA());
console.log(counterA());
console.log(counterA());
console.log(counterA());
console.log(counterA());

console.log(counterB());
console.log(counterB());

//Task 4.2//

//Task 4.3 — Multiplier Factory//
function makeMultiplier(n) {
    return function (x) {
        return x * n;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));
console.log(triple(5));


//PART 5 — Private Data with Closures//
function createWallet(start) {
    let balance = start;

    return {
        add(n) {
            balance += n;
            return balance;
        },

        spend(n) {
            if (n > balance) {
                return "Insufficient balance";
            }

            balance -= n;
            return balance;
        },

        show() {
            return balance;
        }
    };
}

const wallet = createWallet(100);

console.log(wallet.add(50));
console.log(wallet.spend(30));
console.log(wallet.spend(500));
console.log(wallet.show());
console.log(wallet.balance);

//PART 6 — Closures in Loops//

const withVar = [];

for (var i = 0; i < 3; i++) {
    withVar.push(() => i);
}

console.log(withVar.map(f => f()));

const withLet = [];

for (let j = 0; j < 3; j++) {
    withLet.push(() => j);
}

console.log(withLet.map(f => f()));

// PART 7 — Mini Project//
// MAIN CODE//

const wellet = createWallet(500);
const guard = limiter(3);

console.log("Starting Balance:", wallet.show());

console.log("After Add:", wallet.add(200));

console.log(guard());
console.log("After Spend:", wallet.spend(150));

console.log(guard());
console.log("After Spend:", wallet.spend(1000));

console.log("Current Balance:", wallet.show());

console.log("History:", wallet.history());


// FUNCTIONS

function createWallet(start) {
    let balance = start;
    let records = [];

    return {
        add(n) {
            balance += n;
            records.push("Added " + n);
            return balance;
        },

        spend(n) {
            if (n > balance) {
                return "Insufficient balance";
            }

            balance -= n;
            records.push("Spent " + n);
            return balance;
        },

        show() {
            return balance;
        },

        history() {
            return records;
        }
    };
}


function limiter(max) {
    let used = 0;

    return function () {
        if (used < max) {
            used++;
            return "Attempt " + used + " of " + max;
        }

        return "Locked!";
    };
}

// PART 8 — Debugging
//Snippet 1

console.log(total);
var total = 5;

//Snippet 2

//typeError
//greet();

var greet = function () {
    console.log("Hi");
};//

//fix
var greet = function () {
    console.log("Hi");
};

greet();

//Snippet 3

//function makeCounter() {
 //   let c = 0;
  //  return c++;


//const next = makeCounter();

//console.log(next, next);//

function makeCounter() {
    let c = 0;

    return function () {
        c++;
        return c;
    };
}

const next = makeCounter();

console.log(next());
console.log(next());