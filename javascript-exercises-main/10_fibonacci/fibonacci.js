const fibonacci = function(positionNumber) {

if (Number(positionNumber) >=0) {
    let fibonacci=[0,1];
    for (let i=2; i<=positionNumber; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    return fibonacci[positionNumber];
    // console.log(fibonacci[positionNumber]);
} else {
    return "OOPS";
}

};
// fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
