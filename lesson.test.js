const modules = require('./main.js');
//console.log(modules);
const isEven = modules.isEven
const divide = modules.divide
const isPositive = modules.isPositive

//test case for isEven
test("Returns true if argument is an even integer", () => {
    expect(isEven(4)).toBe(true);
})

//test case for divide
test("Should return a number when called", () =>{
    expect(typeof divide(12, 4)).toBe("number");
})

//this is a rigid test case
test("Should return true when pased a positive num", () => {
    expect(isPositive(4)).toBe(true);
    expect(isPositive(-1)).toBe(false);
    expect(isPositive(0)).toBe(true);
})
