export const getCharsData = (state) => state.chars.chars

export const getChar = (state, charId) => state.chars.chars.find(char => char.id === charId)
