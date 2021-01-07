const url = 'http://localhost:3001';

export const checkUser = async (email, password) => {
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
  const user = await fetch(`${url}/users`, myInit).then((response) => response.json());

  // console.log(`
  // @api.js file ->
  // user role: ${user.role}
  // token: ${user.token}
  // `);
  return user || undefined;
};

export const registerUser = async (userData) => {
  // teste
  // const { name, email, password, role } = userData;
  // console.log(userData.role);
  const registerReq = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    mode: 'cors',
    body: JSON.stringify(userData),
  };
  const response = await fetch(`${url}/register`, registerReq).then((res) => res.json());
  /* const response =
    userData.role === 'client'
      ? { role: 'client', token: 'ufjdnmx' }
      : { role: 'administrator', token: 'kkkkk' }; */
  return response || undefined;
};
