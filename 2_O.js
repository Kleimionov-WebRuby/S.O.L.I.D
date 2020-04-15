// Open-Closed Principle

// Bad Example

class Animal {
  constructor(name) {
    this.name = name;
  }

  getAnimalName() {
    return this.name;
  }
}

const animalSound = (animals) => {
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].name == "cat") console.log("meow");
    if (animals[i].name == "lion") console.log("roar");
    if (animals[i].name == "mouse") console.log("squeak");
  }
};

const cat = new Animal("cat");
const lion = new Animal("lion");
const mouse = new Animal("mouse");

const animals = [cat, lion, mouse];

animalSound(animals); // Output 'meow', 'roar' and 'squeak'

// But if we want to create a new animal, we need to change the if block, and this violates the Open-Closed Principle

// ********************************************** //

// Good Example

class GoodAnimal {
  makeSound() {
    throw Error("makeSound method should be implemented");
  }
}

class Squirrel extends GoodAnimal {
  makeSound() {
    return 4;
  }
}
class Spider extends GoodAnimal {
  makeSound() {
    return 8;
  }
}

const countAnimalLegs = (animals) => {
  for (let i = 0; i < animals.length; i++) {
    console.log(animals[i].makeSound());
  }
};

const squirrel = new Squirrel();
const spider = new Spider();

const animalsArray = [squirrel, spider];

countAnimalLegs(animalsArray); // Output '4' and '8'
