import getWords from '../api/getWords';

const allWordsCurrPrevPagesArray = [];

const getAllWordsCurrPrevPages = async (group = 0, page = 0) => {
  let currPage = page;
  if (currPage >= 0) {
    const data = await getWords(group, page);
    allWordsCurrPrevPagesArray.push(data);
    if (currPage > 0) {
      currPage -= 1;
      await getAllWordsCurrPrevPages(group, currPage);
    }
  }
  return allWordsCurrPrevPagesArray;
};

export default getAllWordsCurrPrevPages;
