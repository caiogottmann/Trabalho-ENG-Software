import { Router } from 'express';
import Email from '@/app/schemas/Email.js';
//import authMiddleware from '@/app/middlewares/auth';
const router = new Router();



router.post('/', async (req, res) => {
    var { nome, email } = req.body;
    Email.create({
        nome,
        email
      })
      .catch((error) => {
        console.error(
          'Erro ao criar schema de Email',
          error,
        );
      });
      res.status(200).send('Email cadastrado com sucesso');
});


router.get('/', /*authMiddleware,*/ async (req, res) => {
    var emailscompact = [];
    Email.find()
    .then((emails) => {
      for (var i = 0; i < emails.length; i++) {
          emailscompact = emailscompact.concat({
            id: emails[i].id,
            nome: emails[i].nome,
            email: emails[i].email,
          });
        }
      res.send(emailscompact);
    })
    .catch((error) => {
      console.error('Erro ao obter os dados', error);
      res.status(400).send({
        error: 'Não foi possível exibir os dados, tente novamente',
      });
    });

});



router.delete('/:emailsId', /*authMiddleware,*/ async (req, res) => {
  console.log(req.params);
    await Email
    .findByIdAndRemove(req.params.emailsId)
    .then(() => {
      res.send({ message: 'Removido com sucesso' });
    })
    .catch((error) => {
      console.error('Erro ao remover Email', error);
      res.status(400).send({
        error: 'Não foi possível remover o email, tente novamente',
      });
    });

});




export default router;
