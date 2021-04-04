import createInstance from './createInstance';

const getUserWords = async (userId, authToken) => {
  const request = createInstance(`/users/${userId}/words`, { }, { Authorization: `Bearer ${authToken}` });
  const response = await request.get();
  return response.data;
};

export default getUserWords;
