const { verifyToken } = require('./webTokenMiddleware');

const checkToken = async (req, res, next) => {
  const { authorization } = req.headers;
  const { email } = req.body;
  if (!authorization) {
    return res.status(401).json({ message: 'No autorization.' });
  }
  const payload = await verifyToken(authorization);
  // console.log(payload, email, payload.email === email);
  if (payload.email !== email) {
    return res.status(400).json({ message: 'Operação não autorizada' });
  }

  next();
};

module.exports = checkToken;
