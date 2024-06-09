const findTheOldest = function(array) {
    let arrayOfAges = [];
    for (let i=0; i<array.length; i++){
        let person = array[i];
        // console.log(object);
        arrayOfAges[i] = person.yearOfDeath - person.yearOfBirth;
    }
    console.log(arrayOfAges);
    console.log(Math.max(...arrayOfAges));
    let oldestPerson = array[arrayOfAges.indexOf(Math.max(...arrayOfAges))]
    return (oldestPerson);
};

// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     }
// ];
// console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
