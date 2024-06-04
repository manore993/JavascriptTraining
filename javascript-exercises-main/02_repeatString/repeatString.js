const repeatString = function(text, count) {
    let result = "";
    if (count < 0){
        result = 'ERROR';
    } else {
        result = text.repeat(count);
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
