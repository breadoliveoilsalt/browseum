export default function addWordToTestState(newWord) {
  return {
    type: 'ADD_WORD',
    word: newWord
  }
}
