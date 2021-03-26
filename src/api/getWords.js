const getWords = async () => {
  const response = await fetch('https://react-rslang-back-48.herokuapp.com/words');
  return response.json();
};

export default getWords;
