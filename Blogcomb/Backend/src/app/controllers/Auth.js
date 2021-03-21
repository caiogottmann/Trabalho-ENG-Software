import { Router } from 'express';
import bcrypt from 'bcryptjs';
import authConfig from '@/config/auth';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import User from '@/app/schemas/Usuario';
import authMiddleware from '@/app/middlewares/auth';
import { resolveSoa } from 'dns';
import { rejects } from 'assert';


const router = new Router();

const generateToken = (params) => {
  return jwt.sign(params, authConfig.secret, { expiresIn: 86400 });
};

router.post('/login', (req, res) => {
    var { email, password } = req.body;
  
    if (!email) {
      return res.status(404).send({ error: 'Usuario não encontrado' });
    }
    if (!password) {
      return res.status(400).send({ error: 'Senha inválida' });
    }
    email = email.toLowerCase();
  
    User.findOne({ email })
      .select('+password')
      .then((user) => {
        if (user) {
          bcrypt
            .compare(password, user.password)
            .then((result) => {
              if (result) {
                const token = generateToken({ uid: user.id });
                return res.send({ token: token, tokenExpiration: '7d' });
              } else {
                return res.status(400).send({ error: 'Senha inválida' });
              }
            })
            .catch((error) => {
              console.error('Erro ao verificar senha', error);
              return res.status(500).send({ error: 'Erro interno' });
            });
        } else {
          return res.status(404).send({ error: 'Usuario não encontrado' });
        }
      })
      .catch((error) => {
        email = email.toLowerCase();
        User.create({
            email,
            password
          }).then(() => {
            const token = generateToken({ uid: user.id });
            return res.send({ token: token, tokenExpiration: '7d' });
          })
        return res.status(500).send({ error: 'Erro interno' });
      });
  });


  export default router;