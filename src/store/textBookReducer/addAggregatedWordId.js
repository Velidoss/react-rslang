const addAggregatedWordId = (wordsArray) => wordsArray.map((word) => ({ ...word, id: word._id }));

export default addAggregatedWordId;
