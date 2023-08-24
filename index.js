const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 7;
  } else if (day === "wednesday") {
    return 7;
  } else if (day === "thursday") {
    return 6;
  } else if (day === "friday") {
    return 8;
  } else if (day === "saturday") {
    return 9;
  } else if (day === "sunday") {
    return 10;
  } else {
    return "Error";
  }
};
console.log(getSleepHours("tuesday"));

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hours less sleep than you needed this week. Get some rest."
    );
  } else {
    console.log(
      "You should get some more rest because you've slept " +
        (idealSleepHours - actualSleepHours) +
        " hours less than you should have this week.");
  }
};
calculateSleepDebt();
