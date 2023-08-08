const findColorGroup = require('../problems/findColorGroup');
const { hasCommonCharacter } = require('../utils/findColorGroup')
const colorGroup = findColorGroup()

it('Has color "ROJO" at the beginning', () => {
  expect(colorGroup[0]).toBe('ROJO');
})


for (let i = 0; i < colorGroup.length - 1; i++) {
  const word1 = colorGroup[i]
  const word2 = colorGroup[i + 1]
  const title = `Has its adjoining elements ${word1} and ${word2} coincide in at least one letter`
  it(title, () => {
    const hasCommonChar = hasCommonCharacter(word1, word2)
    expect(hasCommonChar).toBe(true);
  })
}

