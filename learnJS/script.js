/* function testVar () {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x);
    }
    console.log(x);
}

testVar(); */

const PI = 3.14159;
// PI = 3.14;

const person = {name: "John"};
person.age = 20;

console.log(person);

//person = { name:  "BOb" };

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
    console.log(i);
    }, 100);
}

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
    console.log(i);
    }, 100);
}