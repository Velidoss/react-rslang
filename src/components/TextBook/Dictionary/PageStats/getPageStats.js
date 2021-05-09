export default (words, userWords) =>
  words.reduce(
    (acc, { id }) => {
      const userWord = userWords.find(({ wordId }) => id === wordId);

      if (userWord === undefined) {
        return acc;
      }

      if (userWord.difficulty === 'hard' && userWord.optional && userWord.optional?.deleted === false) {
        acc['Изучаемых слов'] += 1;
      }

      if (userWord.optional?.savannah) {
        acc['Правильных ответов'] += userWord.optional.savannah.right || 0;
        acc['Неправильных ответов'] += userWord.optional.savannah.wrong || 0;
      }

      if (userWord.optional?.sprint) {
        acc['Правильных ответов'] += userWord.optional.sprint.right || 0;
        acc['Неправильных ответов'] += userWord.optional.sprint.wrong || 0;
      }

      if (userWord.optional?.puzzle) {
        acc['Правильных ответов'] += userWord.optional.puzzle.right || 0;
        acc['Неправильных ответов'] += userWord.optional.puzzle.wrong || 0;
      }

      if (userWord.optional?.audioChallenge) {
        acc['Правильных ответов'] += userWord.optional.audioChallenge.right || 0;
        acc['Неправильных ответов'] += userWord.optional.audioChallenge.wrong || 0;
      }

      return acc;
    },
    {
      'Изучаемых слов': 0,
      'Правильных ответов': 0,
      'Неправильных ответов': 0,
    },
  );
