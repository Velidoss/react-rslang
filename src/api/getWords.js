import createInstance from './createInstance';

const getWords = async (group = 0, page = 0) => {
  const request = createInstance('/words', { group, page });
  const response = await request.get().catch((error) => {
    console.log(error);
    return {};
  });
  return response.data || [];
};

export default getWords;
