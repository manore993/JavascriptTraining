const sumAll = function(limit1, limit2) {
    // return typeof limit1;
if ((typeof limit1 != "number") || (typeof limit2 != "number") || ((limit1 || limit2) < 0)) {
    return "ERROR";
} else {
    let sum = 0;
    if (limit1 < limit2) {
       for (i=limit1; i<=limit2; i++){
           sum = sum + i;
        }
    } else {
       for (i=limit1; i>=limit2; i--){
           sum = sum + i;
        }
    } 
    return sum;
   };  
}
 
// console.log(sumAll(1, 4)); 
// Do not edit below this line
module.exports = sumAll;
