const findTheOldest = function(array) {
    let arrayYearOfBirth = [];
    for (let i=0; i<array.length; i++){
        let person = array[i];
        // console.log(person.yearOfDeath);
        arrayYearOfBirth[i] = person.yearOfBirth;
    }    
    let oldestPersonbyYearOfBirth = array[arrayYearOfBirth.indexOf(Math.min(...arrayYearOfBirth))];
    if (oldestPersonbyYearOfBirth.yearOfDeath === undefined) {
        return (oldestPersonbyYearOfBirth);
    }
    
    let arrayOfAges = [];
    
    for (let i=0; i<array.length; i++){
        let person = array[i];
        // console.log(person.yearOfDeath);
        arrayOfAges[i] = person.yearOfDeath - person.yearOfBirth;
        if (person.yearOfDeath === undefined) {
            arrayOfAges[i] = 0;
            // console.log("yod undefined");
        }
    }
    console.log(arrayOfAges);
    console.log(Math.max(...arrayOfAges));
    let oldestPerson = array[arrayOfAges.indexOf(Math.max(...arrayOfAges))]
    return (oldestPerson);
};

// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1066,
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
//     },
//   ]
// console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
