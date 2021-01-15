import { getDataByKey } from './localStorage';

export const getUserData = () => {
  const token = getDataByKey('token');
  return JSON.parse(atob(token.split('.')[1])).payload;
};
