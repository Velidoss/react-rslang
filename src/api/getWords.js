const getWords = async () => {
  const response = await fetch('./sabanaDummy.json');
  return response.json();
};

export default getWords;
