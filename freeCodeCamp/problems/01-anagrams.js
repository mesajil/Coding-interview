
const compareAnagrams = (a1, a2) => {

    if (a1.length !== a2.length) return false
    // Sort anagrams
    a1 = a1.split("").sort().join("")
    a2 = a2.split("").sort().join("")
    // Compare values are the same
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i])
            return false
    }
    return true
}


const compareAnagramsHashTable = (a1, a2) => {

    if (a1.length !== a2.length) return false

    // Get hash table of frequencies
    let freq1 = {}, freq2 = {}
    for (let i = 0; i < a1.length; i++) {
        const char1 = a1[i], char2 = a2[i]
        freq1[char1] = freq1.hasOwnProperty(char1) ? freq1[char1] + 1 : 1
        freq2[char2] = freq2.hasOwnProperty(char2) ? freq2[char2] + 1 : 1
    }
    // Compare frequencies
    for (const char in freq1) {
        if (!(char in freq2) || (freq1[char] !== freq2[char]))
            return false
    }
    return true
}


module.exports = compareAnagrams;

// Debugging
compareAnagrams("abc", "cba")
