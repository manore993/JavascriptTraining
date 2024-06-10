const repeatString = function(text, count) {
    let result = "";
    if (count < 0){
        result = 'ERROR';
    } else {
        result = text.repeat(count);
    }
    return result;
};

// to try commit from gitpod.io

// Do not edit below this line
module.exports = repeatString;
