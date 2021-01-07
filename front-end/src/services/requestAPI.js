import axios from 'axios';

const postLogin = async ({ email, password }) =>
  axios
    .post('http://localhost:3001/login', {
      email,
      password,
    })
    .then((e) => {
      return e.data;
    });

    const postRegister = async ({
      name, email, password, role,
    }) =>
  axios
    .post('http://localhost:3001/login', {
      name, email, password, role,
    })
    .then((e) => {
      return e;
    });
    // { user: { name, email, role }, token
    const sendToDB = async ({
      name, email, password, role,
    }) => ({
      name, email, password, role,
    });

export { postLogin };
