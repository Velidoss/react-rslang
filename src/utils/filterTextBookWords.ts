import IDeletedWord from '../interfaces/IDeletedWord';
import ITextBookWord from '../interfaces/ITextBookWord';

const filterTextBookWords = (textBookWords: ITextBookWord[], deletedWords: IDeletedWord): ITextBookWord[] =>
  textBookWords.filter((word) => !deletedWords.some((element: IDeletedWord) => element._id === word.id) && word);

export default filterTextBookWords;
