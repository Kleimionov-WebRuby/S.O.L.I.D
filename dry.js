// DRY (Don’t Repeat Youself)

// Bad Example

const getWeekDay1 = (dayNumber) => {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      throw new Error("Day must be in range 1 to 7");
  }
};

console.log(getWeekDay1(1));

// ********************************************** //

// Good Example

const getWeekDay2 = (dayNumber) => {
  if (dayNumber < 1 || dayNumber > 7)
    throw new Error("Day must be in range 1 to 7");

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return days[dayNumber - 1];
};

console.log(getWeekDay2(5));
