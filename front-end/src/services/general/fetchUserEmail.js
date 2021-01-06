const URL = 'http://localhost:3001/register';

export default async (email) => {
  const res = await fetch(URL, {
    method: 'GET',
    body: JSON.stringify({ email }),
  });
  return res;
};
