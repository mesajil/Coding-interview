const findColorGroup = require('../problems/findColorGroup');
const colorGroup = findColorGroup()

function hasCommonCharacter(str1, str2) {
  for (let char of str1) {
    if (str2.includes(char)) {
      return true;
    }
  }
  return false;
}

it('Has color "ROJO" at the beginning', () => {
    expect(colorGroup[0]).toBe('ROJO');
})

it('Has its adjoining elements coincide in at least one letter', () => {
    for (let i = 0; i < colorGroup.length - 1; i++) {
        const hasCommonChar = hasCommonCharacter(colorGroup[i], colorGroup[i + 1])
        expect(hasCommonChar).toBe(true);
    }
})

