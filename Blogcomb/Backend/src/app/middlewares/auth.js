import jwt from 'jsonwebtoken';
import authConfig from '@/config/auth';
import { request, response } from 'express';

export default (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (authHeader) {
    const tokenData = authHeader.split(' ');

    if (tokenData.length !== 2) {
      return response.status(401).send({ error: 'No valid token provided' });
    }

    const [scheme, token] = tokenData;

    if (scheme.indexOf('Bearer') < 0) {
      return response.status(401).send({ error: 'No valid token provided' });
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        return response.status(401).send({ error: 'No valid token provided' });
      } else {
        request.uid = decoded.uid;
        return next();
      }
    });
  } else {
    return response.status(401).send({ error: 'No valid token provided' });
  }
};