const crypto = require('crypto');

const emailValido = (email) => {
  const regexMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexMail.test(String(email).toLowerCase());
};

module.exports = async (req, res) => {
  const { email, password } = req.body;
  if (!emailValido(email)) {
    return res
      .status(400)
      .json({ message: "O campo e-mail deve ter o formato 'email@email.com'" });
  }
  if (String(password).length < 6) {
    return res
      .status(400)
      .json({ message: 'A senha deve possuir 6 ou mais caracteres' });
  }

  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).json({ token });
};
