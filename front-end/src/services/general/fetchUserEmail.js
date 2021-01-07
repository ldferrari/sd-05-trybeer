const URL = 'http://localhost:3001/register';

export default async (email) => {
  const res = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({ email }),
    'Access-Control-Allow-Origin': 'no-cors',
  });
  const content = await res.json();
  console.log(res, content);
  return content;
};
