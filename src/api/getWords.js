import createInstance from './createInstance';

const getWords = async () => {
  const request = createInstance('/words', { group: 1, page: 10 });
  const response = await request.get();
  console.log(response.data);
  return response.data;
};

export default getWords;
