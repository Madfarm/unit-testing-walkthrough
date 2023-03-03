# Unit-Testing-Walkthrough


## Automatic and Manual testing
- Automatic is a computer program testing code
- manual is what we've been doing - a human testing it

## Unit, Integration, System
- Unit: a test that verifies a small isolated piece of code
- Integration: A test that verifies that isolated pieces of code work in combination
- System: A test that verifies all of the code in our application at once



## Jest is our testing framework
- test("It should return true when called with an even number", () => {
  expect(isEven(2)).toBe(true);
});

- test()
    - This function takes two required arguments:
        1. The name of the test (this is how we will see the output of the test in our console)
        2. An anonymous arrow function where we perform the test
- expect()
    - The expect function takes one argument:
        - `The value that your code produces.`
            - For our Unit Tests, this will always be a call to the function we are testing with specific arguments
- toBe()
    - The toBe() function takes one argument:
        - The value that we expect should be returned by the code inside our expect() function

- methods like 'toBe', 'not' and 'toBeTruthy' are called matchers in the jest library

## npm install jest
- adds jest to a repo
- .gitignore file will tell git not to push the listed the files and dirs


## Making the test file requires .test.js as the ender
- All test cases will go in this file
- when using mulitple js files we need to export some functionalities
- We must module.exports for this - an object
    - module.exports = {

    }

    - This allows us to access the stuff in the code blocks throughout our file structure

- To access it in a given file we must import it
    - syntax: const modules = require('file name here');

## Setting up the test script in package.json
- "scripts": {
    "test": "jest"
  }

## Running the tests
- npm test => in the terminal

## Misc
- typeof inside the expects argument can helpful for checking for common data types
