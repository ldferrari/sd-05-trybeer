const url = 'http://localhost:3001/users';

const checkUser = async (email, password) => {
  const myInit = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  };
  const user = await fetch(url, myInit).then((response) => response.json());

  // console.log(`
  // @api.js file ->
  // user role: ${user.role}
  // token: ${user.token}
  // `);
  return user || undefined;
};

export default checkUser;
