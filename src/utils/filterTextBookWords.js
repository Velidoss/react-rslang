const filterTextBookWords = (textBookWords, deletedWords) => textBookWords.filter(
  (word) => !deletedWords.some((element) => element._id === word.id) && word,
);

export default filterTextBookWords;
