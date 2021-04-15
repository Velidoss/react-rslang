import putWordData from './putWordData';
import postWordData from './postWordData';
import userWordsConstants from '../constants/userWordsConstants';
import getOneAggregatedWord from './getOneAggregatedWord';

const {
  WORD_EASY, WORD_ANSWER_RIGHT, WORD_ANSWER_WRONG,
} = userWordsConstants;

const sendWordGameStatistics = async (userId, authToken, wordId, gameName, answer) => {
  const isWordInUserWords = await getOneAggregatedWord(userId, authToken, wordId);
  const { status } = isWordInUserWords;
  const wordData = {};
  switch (answer) {
    case WORD_ANSWER_RIGHT:
      if (!isWordInUserWords.data
        || !isWordInUserWords.data[0].userWord
        || !isWordInUserWords.data[0].userWord.optional
        || !isWordInUserWords.data[0].userWord.optional[gameName]) {
        wordData.optional = {
          [gameName]: {
            wrong: 0, right: 1, metInGame: 1,
          },
        };
        break;
      }
      wordData.optional = {
        [gameName]: {
          right: isWordInUserWords.data[0].userWord.optional[gameName].right + 1,
          wrong: isWordInUserWords.data[0].userWord.optional[gameName].worng,
          metInGame: isWordInUserWords.data[0].userWord.optional[gameName].metInGame + 1,
        },
      };
      break;
    case WORD_ANSWER_WRONG:
      if (!isWordInUserWords.data
        || !isWordInUserWords.data[0].userWord
        || !isWordInUserWords.data[0].userWord.optional
        || !isWordInUserWords.data[0].userWord.optional[gameName]) {
        wordData.optional = {
          [gameName]: {
            wrong: 1, right: 0, metInGame: 1,
          },
        };
        break;
      }
      wordData.optional = {
        [gameName]: {
          right: isWordInUserWords.data[0].userWord.optional[gameName].right,
          wrong: isWordInUserWords.data[0].userWord.optional[gameName].wrong + 1,
          metInGame: isWordInUserWords.data[0].userWord.optional[gameName].metInGame + 1,
        },
      };
      break;
    default:
      if (!isWordInUserWords.data
        || !isWordInUserWords.data[0].userWord
        || !isWordInUserWords.data[0].userWord.optional
        || !isWordInUserWords.data[0].userWord.optional[gameName]) {
        wordData.optional = {
          [gameName]: {
            wrong: 0, right: 0, metInGame: 1,
          },
        };
        break;
      }
      wordData.optional = {
        [gameName]: {
          right: isWordInUserWords.data[0].userWord.optional[gameName].right,
          wrong: isWordInUserWords.data[0].userWord.optional[gameName].wrong,
          metInGame: isWordInUserWords.data[0].userWord.optional[gameName].metInGame + 1,
        },
      };
      break;
  }
  if (status === 200) {
    if (isWordInUserWords.data[0].userWord) {
      return putWordData(userId, authToken, wordId, wordData);
    }
    postWordData(userId, authToken, wordId,
      { difficulty: WORD_EASY, ...wordData });
  } else {
    postWordData(userId, authToken, wordId,
      { difficulty: WORD_EASY, ...wordData });
  }
  return status;
};

export default sendWordGameStatistics;
