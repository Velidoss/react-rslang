import getWords from '../api/getWords';
import ITextBookWord from '../interfaces/ITextBookWord';

const getTheWords = async (
  group: number = 0,
  page: number = 0,
  allWordsArray: ITextBookWord[],
) => {
  let currPage = page;
  if (currPage >= 0) {
    const data = await getWords(group, page);
    allWordsArray.push(data);
    if (currPage > 0) {
      currPage -= 1;
      await getTheWords(group, currPage, allWordsArray);
    }
  }
  return allWordsArray;
};

const getAllWordsCurrPrevPages = async (group: number = 0, page: number = 0) => {
  const resWordsArray = await getTheWords(group, page, []);
  return resWordsArray;
};

export default getAllWordsCurrPrevPages;
