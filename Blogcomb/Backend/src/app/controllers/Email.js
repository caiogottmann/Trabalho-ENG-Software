import { Router } from "express";
import Email from "@/app/schemas/Email.js";
import authMiddleware from '@/app/middlewares/auth';
const router = new Router();

router.post("/", async (req, res) => {
  var { nome, email } = req.body;
  Email.create({
    nome,
    email,
  }).catch((error) => {
    console.error("Erro ao criar schema de Email", error);
    return res.status(500).send({ error: "Erro ao criar email" });
  });
  res.status(200).send("Email cadastrado com sucesso");
});

router.post("/edit", authMiddleware, async (req, res) => {

  if(req.Admin!=1) {
    return res.status(401).send('Sem autorização para realizar essa ação' );
  }
  const { nome, email } = req.body;
  Email.findOne({ email: email }).then((user) => {
    if (user) {
      user.email = email;
      user.nome = nome;
      user
        .save()
        .then(() => {
          return res
            .status(200)
            .send({ message: "Email alterado com sucesso" });
        })
        .catch((error) => {
          console.error("Erro ao atualizar schema de Email", error);
          return res.status(500).send({ error: "Erro ao alterar email" });
        });
    } else {
      return res.status(404).send({ error: "Email não encontrado" });
    }
  });
});

router.get(  "/",  async (req, res) => {
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
        res.status(200).send(emailscompact);
      })
      .catch((error) => {
        console.error("Erro ao obter os dados", error);
        return res.status(400).send({
          error: "Não foi possível exibir os dados, tente novamente",
        });
      });
  }
);

router.delete(  "/:email",  authMiddleware, async (req, res) => {

  if(req.Admin!=1) {
    return res.status(401).send('Sem autorização para realizar essa ação' );
  }
    await Email.findOneAndDelete({ email: req.params.email })
      .then(() => {
        return res.status(200).send({ message: "Removido com sucesso" });
      })
      .catch((error) => {
        console.error("Erro ao remover Email", error);
        return res.status(400).send({
          error: "Não foi possível remover o email, tente novamente",
        });
      });
  }
);

export default router;
