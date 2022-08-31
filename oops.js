class LivingBeing {
  mortality = true;
  constructor() {}
  sleep() {}

  speak() {}

  fly() {}
  run() {}
}

class Dog extends Animal {
  constructor(name) {
    super();
    this.name;
  }
  speak() {
    return this.name + ' only barks!';
  }
}

class Parrot extends LivingBeing {
  constructor(name) {
    super();
    this.name = name;
  }
  speak() {
    return this.name + ' can make sound!';
  }
  fly() {
    return this.name + ' can fly in the sky!';
  }
}

const babyParrot = new Parrot('Anna');
const tommy = new Dog('tommy');
