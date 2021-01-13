const jwt = require('jsonwebtoken');

const secret = 'grupo-05';

async function authToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'missing authentication token' });
  }

  try {
    jwt.verify(token, secret);
    return next();
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({ message: 'token malformed' });
  }
}

module.exports = authToken;
