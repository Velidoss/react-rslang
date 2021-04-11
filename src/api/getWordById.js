import axios from 'axios';
import DataAccessContants from '../constants/DataAccessContants';

const { ApiUrl } = DataAccessContants;

const getWordById = async (wordId) => {
  const response = await axios({
    method: 'get',
    url: `${ApiUrl}/words/${wordId}`,
  }).catch((error) => {
    console.log(error);
    return {};
  });
  return response.data;
};

export default getWordById;
