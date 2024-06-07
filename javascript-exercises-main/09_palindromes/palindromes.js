const palindromes = function (string) {
    otherString = "";
    string =  string.toLowerCase();
    for (let i=0; i<=string.length; i++){
        if (string.charAt(i) >= "a"  && string.charAt(i) <= "z" ){
            otherString = otherString + string.charAt(i);
        }else if (string.charAt(i) >= "0"  && string.charAt(i) <= "9" ){
            otherString = otherString + string.charAt(i);
        }
    }
    // console.log(otherString);
    let reverseString = "";
    for (let i = otherString.length-1; i>=0; i--){
        reverseString = reverseString + otherString.charAt(i);
    }
    // console.log(reverseString);
    if (otherString === reverseString){
        return true;
    } else {
        return false;
    }
    
};

palindromes('A car, a man, a maraca.');
// console.log(palindromes('Animal loots foliated detail of stool lamina.'));
// Do not edit below this line
module.exports = palindromes;
