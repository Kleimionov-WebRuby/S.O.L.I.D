// Interface Segregation Principle

// Bad Example

class Car {
  constructor({
    doors,
    wheels,
    battery,
    electricMotor,
    combustionEngine,
    fuelTank,
  }) {
    this.doors = doors;
    this.wheels = wheels;
    this.battery = battery;
    this.electricMotor = electricMotor;
    this.combustionEngine = combustionEngine;
    this.fuelTank = fuelTank;
  }

  getDoors() {
    return `${this.doors} doors`;
  }

  getWheels() {
    return `${this.wheels} wheels`;
  }

  getBattery() {
    return `${this.battery} battery`;
  }

  getElectricMotor() {
    return `${this.electricMotor} electric motor`;
  }

  getCombustionEngine() {
    return `${this.combustionEngine} combustion engine`;
  }

  getFuelTank() {
    return `${this.fuelTank} fuel tank`;
  }

  getInformation() {
    return `This car has:
      • ${this.getDoors()}
      • ${this.getWheels()}
      • ${this.getBattery()}
      • ${this.getElectricMotor()}
      • ${this.getCombustionEngine()}
      • ${this.getFuelTank()}
    `;
  }
}

// const electricCar = new Car({
//   doors: 4,
//   wheels: 4,
//   battery: "10,000v",
//   electricMotor: "HPEVS",
// });

// console.log(electricCar.getInformation());

// But if we decided to create a motor car it is different from an electric car
// and does not have 'battery' and 'electricMotor', but has 'combustion engine' and 'fuel tank'

// Let's add it to our class

// But now we need to change our 'electricCar', because we added new info 'combustionEngine' and 'fuelTank'

const electricCar = new Car({
  doors: 4,
  wheels: 4,
  battery: "10,000v",
  electricMotor: "HPEVS",
  combustionEngine: "no",
  fuelTank: "no",
});

console.log(electricCar.getInformation());

const motorCar = new Car({
  doors: 4,
  wheels: 4,
  battery: "no",
  electricMotor: "no",
  combustionEngine: "V8",
  fuelTank: "80L",
});

console.log(motorCar.getInformation());

// This violates the principle as we are now depending on methods we don't use and have to cater for them.

// !!!! Let's write more correctly code in another file (4.2_I.js) !!!!
