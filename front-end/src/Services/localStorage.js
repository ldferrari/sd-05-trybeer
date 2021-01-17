const trybeerData = {
  token: '',
};

export const registerData = (data) => {
  if (!window.localStorage) throw new Error('Localstorage not suported');
  const current = localStorage.getItem('trybeer');
  if (!current) localStorage.setItem('trybeer', JSON.stringify(trybeerData));
  const newData = { ...trybeerData, ...data };
  localStorage.setItem('trybeer', JSON.stringify(newData));
};

export const getDataByKey = (key) => {
  if (!window.localStorage) throw new Error('Localstorage not suported');
  const current = localStorage.getItem('trybeer');
  if (!current) return null;
  return JSON.parse(current)[key];
};
