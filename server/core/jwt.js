import jwt from 'jsonwebtoken';
import config from '../config/default';

export default {
  verify: (token) => {
    return new Promise((resolve) => {
      jwt.verify(token, config.tokenKey, (err, user) => {

        if (err) return resolve(false);
        resolve(user);
      })
    });
  },
  generate: (data, expiresIn = '1d') => {
    return jwt.sign(
      data,
      config.tokenKey,
      { expiresIn }
    )
  }
}