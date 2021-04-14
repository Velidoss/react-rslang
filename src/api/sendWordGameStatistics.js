import getOneUserWord from './getOneUserWord';
import putWordData from './putWordData';
import postWordData from './postWordData';
import userWordsConstants from '../constants/userWordsConstants';

const {
  WORD_EASY, WORD_ANSWER_RIGHT, WORD_ANSWER_WRONG,
} = userWordsConstants;

const sendWordGameStatistics = async (userId, authToken, wordId, gameName, answer) => {
  const isWordInUserWords = await getOneUserWord(userId, authToken, wordId);
  const { status } = isWordInUserWords;
  const wordData = {};
  switch (answer) {
    case WORD_ANSWER_RIGHT:
      if (!isWordInUserWords.data.optional[gameName]) {
        wordData.optional = {
          [gameName]: {
            wrong: 0, right: 1, metInGame: 1,
          },
        };
        break;
      }
      wordData.optional = {
        [gameName]: {
          right: { ...isWordInUserWords.data.optional[gameName].right + 1 },
          metInGame: { ...isWordInUserWords.data.optional[gameName].metInGame + 1 },
        },
      };
      break;
    case WORD_ANSWER_WRONG:
      if (!isWordInUserWords.data.optional[gameName]) {
        wordData.optional = {
          [gameName]: {
            wrong: 1, right: 0, metInGame: 1,
          },
        };
        break;
      }
      wordData.optional = {
        [gameName]: {
          wrong: { ...isWordInUserWords.data.optional[gameName].wrong + 1 },
          metInGame: { ...isWordInUserWords.data.optional[gameName].metInGame + 1 },
        },
      };
      break;
    default:
      if (!isWordInUserWords.data.optional[gameName]) {
        wordData.optional = {
          [gameName]: {
            wrong: 0, right: 0, metInGame: 1,
          },
        };
        break;
      }
      wordData.optional = {
        [gameName]: {
          metInGame: { ...isWordInUserWords.data.optional[gameName].metInGame + 1 },
        },
      };
      break;
  }
  if (status === 200) {
    putWordData(userId, authToken, wordId, wordData);
  } else {
    postWordData(userId, authToken, wordId,
      { difficulty: WORD_EASY, ...wordData });
  }
  return status;
};

export default sendWordGameStatistics;
