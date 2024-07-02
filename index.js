// Code your solution here
///////////////////////////////////////////////
function findMatching(arrayOfDriversNames, str) {
  const newArrayOfDriversNames = arrayOfDriversNames.filter(
    (driver) => driver.toLowerCase() === str.toLowerCase()
  );

  return newArrayOfDriversNames;
}

///////////////////////////////////////////////
function fuzzyMatch(arrayOfDriversNames, str) {
  const newArrayOfDriversNames = arrayOfDriversNames.filter(
    (driver) => driver.slice(0, 2).toLowerCase() === str.toLowerCase()
  );

  return newArrayOfDriversNames;
}

///////////////////////////////////////////////
function matchName(arrayOfDriverObjects, str) {
  const newArrayOfElements = arrayOfDriverObjects.filter(
    (element) => element.name === str
  );

  return newArrayOfElements;
}
