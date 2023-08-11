

function hasCommonCharacter(str1, str2) {
    for (let char of str1) {
        if (str2.includes(char)) {
            return true;
        }
    }
    return false;
}

function hasSameLength (str1, str2) {
    return str1.length === str2.length
}

module.exports = {
    hasCommonCharacter,
    hasSameLength,
};

