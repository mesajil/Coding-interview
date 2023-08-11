const { hasCommonCharacter, hasSameLength } = require('../utils/findColorGroup')

COLORS = ["ROJO", "MALVA", "VERDE", "AMBAR", "CIAN", "BURDEOS"]

const validateAdjacentCharts = (str1, str2) => {
    if (!str1 || !str2) return false
    return hasCommonCharacter(str1, str2) && !hasSameLength(str1, str2)
}

const findColorGroup = () => {
    const first = "ROJO"
    const solveUpdatedColors = solveCommonCharacter(COLORS, first)
    if (solveUpdatedColors) {
        return solveUpdatedColors
    }
    return COLORS
}

const solveCommonCharacter = (colors, fixed, prev) => {
    if (colors.length < 2) return colors

    for (let i = 0; i < colors.length; i++) {
        if (colors[i] === fixed || validateAdjacentCharts(colors[i], prev)) {
            const updatedColors = [...colors.slice(0, i), ...colors.slice(i + 1)]
            const solveUpdatedColors = solveCommonCharacter(updatedColors, undefined, colors[i])
            if (solveUpdatedColors) {
                return [colors[i], ...solveUpdatedColors]
            }
        }
    }
    return undefined
}


module.exports = findColorGroup;

// Test solveCommonCharacter

console.log(solveCommonCharacter(["R"], "R"));
console.log(solveCommonCharacter(["R", "O", "RO", "OO"], "R"));
console.log(solveCommonCharacter(["R", "O", "RO"], "O"));
console.log(solveCommonCharacter(COLORS, "ROJO"));