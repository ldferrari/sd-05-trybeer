const { verifyToken } = require('./webTokenMiddleware');

const checkToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'No autorization.' });
  }
  /* if (payload.email !== email) {
    return res.status(400).json({ message: 'Operação não autorizada' });
  } */
  try {
    console.log('authorization', authorization);
    const payload = await verifyToken(authorization);
    req.payload = payload;
    // os outros middlewares conseguem ter acesso ao payload.
    // console.log(payload, email, payload.email === email);
    // console.log(payload);
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Operação não autorizada' });
  }
  next();
};

module.exports = checkToken;
