import axios from 'axios';
import DataAccessConstants from '../constants/DataAccessConstants';

const { ApiUrl } = DataAccessConstants;

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
