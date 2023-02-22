var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = [];
        this.counter = 0;
    }

    gazeAtVictim(person) {
        this.counter += 1
        person = new Statue(person.name);
        this.statues.push(person);
        if (this.counter === 4) {
            var human = this.statues.shift() 
            human = new Person(human.name);
            human.mood = "relieved";
            return human;
        }
    }
}

module.exports = Medusa;