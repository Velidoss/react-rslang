import createInstance from './createInstance';

const getWords = async (group = 0, page = 0) => {
  const request = createInstance('/words', { group, page });
  const response = await request.get();
  return response.data;
};

export default getWords;
