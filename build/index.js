"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log('hi');
    }
}
function Namewith(person) {
    person.sayHi();
}
Namewith(new Person('shud'));
