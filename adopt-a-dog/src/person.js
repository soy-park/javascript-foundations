var Dog = require("./dog.js");

class Person {
  constructor(name, dogInstance) {
    this.name = name;
    this.dog = dogInstance;
    this.counter = 0;
  }

  fillFoodBowl() {
    this.dog.hungry = false;
  }

  throwBall() {
    this.dog.fetchBall();
    return `${this.dog.name} loves playing fetch!`;
  }

  introduceNewFriends(dogInstance) {
    this.dog.makeNewFriend(dogInstance);
  }

  adoptAPup(name, age) {
    if (this.dog) {
      return `You can\'t adopt ${name}. You already have Cap!`;
    } else {
      this.dog = new Dog({ name, age });
    }
  }
}

module.exports = Person;
