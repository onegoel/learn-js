const numFunctions = require('./index')

describe('Test suite for numFunctions', () => {
    test('passing 5 as input to isPrime should return true', () => {
        expect(numFunctions.isPrime(5)).toBe(true);
    });
    test('passing -7 as input to isPrime should return false', () => {
        expect(numFunctions.isPrime(-7)).toBe(false);
    });
    test('passing "aryan" as input to isPrime should return false', () => {
        expect(numFunctions.isPrime("aryan")).toBe(false);
    });
    test('passing 10 as input to isPrime should return false', () => {
        expect(numFunctions.isPrime(10)).toBe(false);
    });
    /*
    test('passing 15 as input to isPrime should return true', () => {
        expect(numFunctions.isPrime(15)).toBe(true);                    
    });
    */ // trying out a failed TC here, found that the TS fails
    test('passing 9474 as input to isArmstrong should return true', () => {
        expect(numFunctions.isArmstrong(9474)).toBe(true);
    });
    test('passing -8980 as input to isArmstrong should return false', () => {
        expect(numFunctions.isArmstrong(-8980)).toBe(false);
    });
    test('passing "goel" as input to isArmstrong should return false', () => {
        expect(numFunctions.isArmstrong("goel")).toBe(false);
    });
    test('passing 548834 as input to isArmstrong should return true', () => {
        expect(numFunctions.isArmstrong(548834)).toBe(true);
    });
})