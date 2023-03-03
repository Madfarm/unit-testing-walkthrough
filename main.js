// given a number, determine if that number is even
function isEven(num) {
    return num % 2 == 0;
}
// divides one number by another number
function divide(a, b) {
    return a / b;
}

function isPositive(num){
    return num >= 0 ? true: false;
}


module.exports = {
    isEven,
    divide,
    isPositive
}
