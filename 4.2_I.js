// Interface Segregation Principle

// Good Example

class ElectricEngine {
  constructor({ battery, electricMotor }) {
    this.battery = battery;
    this.electricMotor = electricMotor;
  }

  getBattery() {
    return `${this.battery} battery`;
  }

  getElectricMotor() {
    return `${this.electricMotor} electric motor`;
  }

  information() {
    return `This engine has:
        • ${this.getBattery()}
        • ${this.getElectricMotor()}
    `;
  }
}
class GasEngine {
  constructor({ combustionEngine, fuelTank }) {
    this.combustionEngine = combustionEngine;
    this.fuelTank = fuelTank;
  }

  getCombustionEngine() {
    return `${this.combustionEngine} combustion engine`;
  }

  getFuelTank() {
    return `${this.fuelTank} fuel tank`;
  }

  information() {
    return `This engine has:
        • ${this.getCombustionEngine()}
        • ${this.getFuelTank()}
    `;
  }
}

class Car {
  constructor({ doors, wheels, enginType }) {
    this.doors = doors;
    this.wheels = wheels;
    this.engin = enginType;
  }

  getDoors() {
    return `${this.doors} doors`;
  }

  getWheels() {
    return `${this.wheels} wheels`;
  }

  getInformation() {
    return `
    This car has:
      • ${this.getDoors()}
      • ${this.getWheels()}
      • ${this.engin.information()}
    `;
  }
}

const electricCar = new Car({
  doors: 4,
  wheels: 4,
  enginType: new ElectricEngine({
    battery: "10,000v",
    electricMotor: "HPEVS",
  }),
});

console.log(electricCar.getInformation()); // Output ↓
/////////////////////////////////////
//  This car has:                  //
//  • 4 doors                      //
//  • 4 wheels                     //
//  • This engine has:             //
//    • 10,000v battery            //
//    • HPEVS electric motor       //
/////////////////////////////////////

const motorCar = new Car({
  doors: 4,
  wheels: 4,
  enginType: new GasEngine({
    combustionEngine: "V8",
    fuelTank: "80L",
  }),
});

console.log(motorCar.getInformation()); // Output ↓

/////////////////////////////////////
//  This car has:                  //
//  • 4 doors                      //
//  • 4 wheels                     //
//  • This engine has:             //
//    • V8 combustion engine       //
//    • 80L fuel tank              //
/////////////////////////////////////
