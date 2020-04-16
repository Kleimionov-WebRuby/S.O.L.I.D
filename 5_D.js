// Dependency Inversion Principle

// Bad Example

class User {
  constructor() {
    this.settings = new UserSettings();
  }
}

const user = new User();

// ********************************************** //

// Good Example

class Car {
  constructor(settings) {
    this.settings = settings;
  }
}

const car = new Car(new CarSettings());
