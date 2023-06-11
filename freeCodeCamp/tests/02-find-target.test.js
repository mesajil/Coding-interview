const findInteger = require('../problems/02-find-target');

describe("Element is not in the Array", () => {
    test("", () => {
        expect(findInteger([1,1,2,3], 4)).toEqual([-1,-1]);
    });
    test("", () => {
        expect(findInteger([1], 4)).toEqual([-1,-1]);
    });
    test("", () => {
        expect(findInteger([], 4)).toEqual([-1,-1]);
    });
})

describe("Element is in the Array one time", () => {
    test("", () => {
        expect(findInteger([1,2,3], 2)).toEqual([1,1]);
    });
    test("", () => {
        expect(findInteger([1], 1)).toEqual([0,0]);
    });
    test("", () => {
        expect(findInteger([1,2,3,4], 4)).toEqual([3,3]);
    });
})

describe("Element is in the Array multiple times", () => {
    test("", () => {
        expect(findInteger([1,2,2,3], 2)).toEqual([1,2]);
    });
    test("", () => {
        expect(findInteger([1,1,1,1], 1)).toEqual([0,3]);
    });
    test("", () => {
        expect(findInteger([1,2,3,4,4], 4)).toEqual([3,4]);
    });
})

