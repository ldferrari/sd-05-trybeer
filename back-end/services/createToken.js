const jwt = require('jsonwebtoken');

async function createToken(payload) {
  const secret = 'grupo-05';
  const headers = {
    expiresIn: '30m',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret, headers);

  return token;
}

module.exports = createToken;
