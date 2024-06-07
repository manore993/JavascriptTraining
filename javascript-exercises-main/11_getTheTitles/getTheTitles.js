const getTheTitles = function(array) {
    // console.log(array[0])
    let arrayOut = [];
    for (let i=0; i<array.length; i++){
        let object = array[i];
        console.log(object);
        arrayOut[i] = object.title;
    }
    return arrayOut;
};

// let books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
// ];
// console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
