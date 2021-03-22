import { Router } from 'express';
import Post from '@/app/schemas/Post.js';
import Tag from '@/app/schemas/Tag.js';
import Usuario from '@/app/schemas/Usuario.js';
import authMiddleware from '@/app/middlewares/auth';

const router = new Router();



router.post('/', authMiddleware, async (req, res) => {
    const { titulo, texto, data, tag } = req.body;
    const creator=req.uid;
    console.log(tag)
    for (var i = 0; i < tag.length; i++) {
      var existetag = await Tag.findOne({tag: tag[i]})
      if(!existetag) {
        Tag.create({
          tag : tag[i]
        })
        .catch((error) => {
          console.error(
            'Erro ao criar schema de Tag',
            error,
          );
        });
      }
    }
    Post.create({
        titulo, texto, data, tag, creator
      })
      .catch((error) => {
        console.error(
          'Erro ao criar schema de Post',
          error
        );
      });
      res.status(200).send('Post cadastrado com sucesso');
});

router.post('/edit', authMiddleware, async (req, res) => {
    const { postId, titulo, texto, tag } = req.body;
    const Admin  = req.Admin;
    console.log(req.Admin, "\n", req.uid, "\n");

    Post.findOne({_id: postId}).then((postencontrado) => {
        if ((postencontrado && postencontrado.creator==req.uid)|| Admin) {
                postencontrado.titulo = titulo;
                postencontrado.texto = texto;
                postencontrado.tag = tag;
                postencontrado.save().then(() => {
                    return res.status(200).send('Post alterado com sucesso');
                })
                .catch((error) => {
                    console.error(
                    'Erro ao atualizar schema de Post',
                    error,
                    );
                    return res.status(500).send('Erro ao alterar Post');
                });
        }
        else  if(postencontrado) {
          return res.status(401).send('Sem autorização para realizar essa ação' );
        }
        else {
          return res.status(404).send('Post não encontrado' );
        }
      })
});


router.get('/', async (req, res) => {
    var postscompact = [];
    Post.find()
    .then((posts) => {
      for (var i = 0; i < posts.length; i++) {
          postscompact = postscompact.concat({
            id:posts[i]._id,
            titulo: posts[i].titulo,
            texto: posts[i].texto,
            data: posts[i].data,
            tag: posts[i].tag,
            creator: posts[i].creator,
          });
        }
      res.status(200).send(postscompact);
    })
    .catch((error) => {
      console.error('Erro ao obter os dados', error);
      res.status(400).send(
        'Não foi possível exibir os dados, tente novamente',
      );
    });

});

router.get('/:postsId', /*authMiddleware,*/ async (req, res) => {
  Post.findOne({_id: req.params.postsId})
  .then((posts) => {
    res.status(200).send(posts);
  })
  .catch((error) => {
    console.error('Erro ao obter os dados', error);
    res.status(400).send({
      error: 'Não foi possível exibir os dados, tente novamente',
    });
  });

});


router.delete('/:postsId', authMiddleware, async (req, res) => {
  console.log(req.params);
  const Admin  = req.Admin;
  var creatorID= 0;
  var post = "qualquer coisa";
  await Post.findOne({_id: req.params.postsId}).then((postencontrado) => {
    creatorID=postencontrado.creator;
    //console.log(post, "\n", postencontrado, "\n")
    post = postencontrado;
    //console.log("mudou?\n", post, "\n", postencontrado, "\n")
  })
  .catch((error) => {
    console.error('Erro ao encontrar o post', error);
    res.status(400).send(
      'Não foi possível deletar o post, tente novamente',
    );
  });
  
  if (!Admin && creatorID!=req.uid){
    return res.status(401).send('Sem autorização para realizar essa ação' );
  }
    await Post
    .findByIdAndRemove(req.params.postsId)
    .then(() => {
      return res.status(200).send('Removido com sucesso' );
    })
    .catch((error) => {
      console.error('Erro ao remover post', error);
      return res.status(400).send(
        'Não foi possível remover o post, tente novamente',
      );
    });

});


export default router;