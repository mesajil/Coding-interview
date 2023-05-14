

const stringSort = (str) => {
    list = str.split("")
    list.sort()
    return list.join("")
}

const compareAnagrams = (a1, a2) => {
    if (a1.length !== a2.length) return false
    a1 = stringSort(a1) // O(n^log(n))
    a2 = stringSort(a2) // O(n^log(n))
    for (let i = 0; i < a1.length; i++) { // O(n)
        if (a1[i] !== a2[i]) return false
    }
    return true
}


module.exports = compareAnagrams;

