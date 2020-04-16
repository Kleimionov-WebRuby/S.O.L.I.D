const var1 = null;

if (var1 === null || var1 === undefined || var1 === "") {
  console.log("VARIABLE NOT FOUND!");
} else {
  console.log(var1);
}

// But we can do it smartly

console.log(var1 || "VARIABLE NOT FOUND!");

// *************************************************

const person = {
  firstName: "Rob",
  lastName: "Yangi",
};

const getFirstName = (person) => {
  // let firstName;
  // if (person) {
  //   firstName = person.firstName;
  // }

  //  Better way ↓
  const firstName = person && person.firstName;

  return firstName;
};

console.log(getFirstName(person));

// *************************************************

const list = [2, 5, 7, 2, 6, 2, 3, 5];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

// Better way ↓
list.forEach((number) => console.log(number));

// *************************************************

function doubleValue1(value) {
  return value * 2;
}

// Or use arrow function

const doubleValue2 = (value) => value * 2;
