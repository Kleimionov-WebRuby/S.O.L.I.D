// Interface Segregation Principle

// Bad Example

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   swim() {
//     console.log(`${this.name} can swim`);
//   }
//   walk() {
//     console.log(`${this.name} can walk`);
//   }
//   fly() {
//     console.log(`${this.name} can fly`);
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }

//   fly() {
//     return null;
//   }
// }

// // For each class, we must overwrite methods that it doesn't use

// class Pigeon extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   swim() {
//     return null;
//   }
// }

// ********************************************** //

// Good Example

class Animal {
  constructor(name) {
    this.name = name;
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} can swim`);
  },
};

const flier = {
  fly() {
    console.log(`${this.name} can fly`);
  },
};

const walker = {
  walk() {
    console.log(`${this.name} can walk`);
  },
};

class Dog extends Animal {}
class Pigeon extends Animal {}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Pigeon.prototype, flier, walker);

const dog = new Dog("Rick");
dog.walk();
dog.swim();

const pigeon = new Pigeon("Filip");
pigeon.fly();
pigeon.walk();
