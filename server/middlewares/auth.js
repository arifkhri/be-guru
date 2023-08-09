import jwt from '../core/jwt';

const verifyToken = async (req, res, next) => {
  const bearerToken = req.headers.authorization || '';
  let token = bearerToken.split(' ');
  token = token.length ? token[1] : '';

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  const userData = await jwt.verify(token);

  if (userData) {
    req.user = userData;
    return next();
  }

  return res.status(401).send("Invalid Token");
}

module.exports = verifyToken;