const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'missing authentication token' });
    }
    const secret = 'group-05';
    const payload = jwt.verify(token, secret);
    req.userPayload = payload.userData;

    return next();
  } catch (err) {
    console.log(err.message);
    return res.status(401).json({ message: 'token malformed' });
  }
}

module.exports = authToken;
