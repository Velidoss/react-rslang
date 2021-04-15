export default (words, userWords) => words.reduce((acc, { id }) => {
  const userWord = userWords.find(({ wordId }) => id === wordId);

  if (userWord === undefined) {
    return acc;
  }

  if (userWord.difficulty === 'hard' && userWord.optional?.deleted === false) {
    acc['Изучаемых слов'] += 1;
  }

  if (userWord.optional?.savannah) {
    acc['Правильных ответов'] += userWord.optional.savannah.right;
    acc['Неправильных ответов'] += userWord.optional.savannah.wrong;
  }

  if (userWord.optional?.sprint) {
    acc['Правильных ответов'] += userWord.optional.sprint.right;
    acc['Неправильных ответов'] += userWord.optional.sprint.wrong;
  }

  if (userWord.optional?.puzzle) {
    acc['Правильных ответов'] += userWord.optional.puzzle.right;
    acc['Неправильных ответов'] += userWord.optional.puzzle.wrong;
  }

  if (userWord.optional?.audiochallange) {
    acc['Правильных ответов'] += userWord.optional.audiochallange.right;
    acc['Неправильных ответов'] += userWord.optional.audiochallange.wrong;
  }

  return acc;
}, {
  'Изучаемых слов': 0,
  'Правильных ответов': 0,
  'Неправильных ответов': 0,
});
