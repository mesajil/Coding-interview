const compareAnagrams = require('../problems/01-anagrams');

describe("Same length and frequency", () => {
    test("", () => {
        expect(compareAnagrams("abc", "cba")).toBe(true);
    });
    test("", () => {
        expect(compareAnagrams("", "")).toBe(true);
    });
    test("", () => {
        expect(compareAnagrams("a", "a")).toBe(true);
    });
})

describe("Same length and different frequency", () => {
    test("", () => {
        expect(compareAnagrams("abc", "cbc")).toBe(false);
    });
    test("", () => {
        expect(compareAnagrams("abc", "caa")).toBe(false);
    });
})

describe("Different length and different frequency", () => {
    test("", () => {
        expect(compareAnagrams("acbc", "cbcad")).toBe(false);
    });
})
