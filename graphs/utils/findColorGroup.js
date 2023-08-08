

function hasCommonCharacter(str1, str2) {
    for (let char of str1) {
        if (str2.includes(char)) {
            return true;
        }
    }
    return false;
}


module.exports = {
    hasCommonCharacter
};