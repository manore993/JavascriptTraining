const removeFromArray = function() {
    let array = arguments[0];
    // console.log("array " + array);
    // console.log("arguments " + arguments);
    
    for (let i = 1; i < arguments.length; i++){
        
        console.log("arguments[i] " + arguments[i]);
        value = arguments[i];
        // console.log("value " + value);
        let j = 0;
        while (j < array.length){
            // console.log("array[j] " + array[j]);
            if (array[j] === value){
                array.splice(j,1);
            } else {
                ++j;
            }
        }
    }
    return array;
};
// console.log(removeFromArray([1, 2, 2, 3], 2));
// Do not edit below this line
module.exports = removeFromArray;
