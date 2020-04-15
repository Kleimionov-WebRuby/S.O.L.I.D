// Single Responsibility Principle

// Bad Example

class Animal {
  constructor(name) {
    this.name = name;
  }

  getAnimalName() {
    return this.name;
  }
  getAnimal() {
    // ...
  }
  saveAnimal() {
    // ...
  }
}

// ********************************************** //

// Good Example

class Animal {
  constructor(name) {
    this.name = name;
  }

  getAnimalName() {
    return this.name;
  }
}

// Class for working with animal entities in BD
class AnimalDB {
  getAnimal() {
    // ...
  }
  saveAnimal() {
    // ...
  }
}
