import { getDataByKey } from './localStorage';

export const getUserData = () => {
  const token = getDataByKey('token');
  if(!token) return null;
  return JSON.parse(atob(token.split('.')[1])).payload;
};
