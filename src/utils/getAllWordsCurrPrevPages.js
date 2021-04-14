import getWords from '../api/getWords';

const getTheWords = async (group = 0, page = 0, allWordsArray) => {
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

const getAllWordsCurrPrevPages = async (group = 0, page = 0) => {
  const resWordsArray = await getTheWords(group, page, []);
  return resWordsArray;
};

export default getAllWordsCurrPrevPages;
