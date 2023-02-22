class Dog {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
    this.energyLevel = 5;
    this.hungry = true;
    this.friends = [];
    this.counter = 0;
  }

  eat() {
    if (this.hungry === true) {
      this.hungry = false;
      return `Yum!`;
    } else if (this.hungry === false) {
      return `I refuse to eat.`;
    }
  }

  fetchBall() {
    this.counter += 1;
    if (this.counter < 3) {
      this.energyLevel -= 1;
      return `This is fun!`;
    } else if (this.counter === 3) {
      this.energyLevel = 3;
      return `Nah, I\'m going to sleep instead.`;
    }
  }

  sleep() {
    if (this.energyLevel < 10) {
      this.energyLevel += 1;
    } else if (this.energyLevel === 10) {
      return `I have too much energy to rest. I\'m going to chew something instead.`;
    }
  }

  makeNewFriend(dogInstance) {
    this.friends.push(dogInstance.name);
  }
}

module.exports = Dog;
