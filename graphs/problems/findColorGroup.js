const { hasCommonCharacter } = require('../utils/findColorGroup')

COLORS = ["ROJO", "MALVA", "VERDE", "AMBAR", "CIAN", "BURDEOS"]


const findColorGroup = () => {
    const first = "ROJO"
    const solveUpdatedColors = solveCommonCharacter2(COLORS, first)
    if (solveUpdatedColors) {
        return solveUpdatedColors
    }
    return COLORS
}

const findColorGroup2 = () => {
    const colorToRemove = "ROJO"
    const updatedColors = [...COLORS]
    updatedColors.splice(COLORS.indexOf(colorToRemove), 1)

    const solveUpdatedColors = solveCommonCharacter(updatedColors, colorToRemove)
    for (const sol of solveUpdatedColors) {
        const first = sol[0]
        if (hasCommonCharacter(colorToRemove, first))
            return [colorToRemove, ...solveUpdatedColors]
    }
    return COLORS
}

const solveCommonCharacter = (colors) => {
    return colors
}

const solveCommonCharacter2 = (colors, pattern) => {
    if (!colors.length) return []

    for (let i = 0; i < colors.length; i++) {
        if (hasCommonCharacter(colors[i], pattern)) {
            const updatedColors = [...colors.slice(0, i), ...colors.slice(i + 1)]
            const solveUpdatedColors = solveCommonCharacter2(updatedColors, colors[i])
            if (solveUpdatedColors) {
                return [colors[i], ...solveUpdatedColors]
            }
        }
    }
    return undefined
}


module.exports = findColorGroup;

// Test solveCommonCharacter2

console.log(solveCommonCharacter2(["R"], "R"));
console.log(solveCommonCharacter2(["R", "O", "RO"], "R"));
console.log(solveCommonCharacter2(["R", "O", "RO"], "O"));
console.log(solveCommonCharacter2(COLORS, "ROJO"));