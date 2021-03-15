import { Router } from 'express';
import Post from '@/app/schemas/Post.js';
import Tag from '@/app/schemas/Tag.js';
import Usuario from '@/app/schemas/Usuario.js';

//import authMiddleware from '@/app/middlewares/auth';
const router = new Router();



router.post('/', async (req, res) => {
    const { titulo, texto, data, tag, creator } = req.body;
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
          error, 
          'titulo: ', titulo, ' texto: ', texto, ' data: ', data, ' tag: ', tag, ' creator: ', creator
        );
      });
      res.status(200).send('Post cadastrado com sucesso');
});

router.post('/edit', async (req, res) => {
    const { postId, titulo, texto, tag, creator } = req.body;
    const Admin = 1;

    Post.findOne({_id: postId}).then((postencontrado) => {
        if (postencontrado) {
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
        else {
          return res.status(404).send('Post não encontrado' );
        }
      })
});


router.get('/', /*authMiddleware,*/ async (req, res) => {
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


router.delete('/:postsId', /*authMiddleware,*/ async (req, res) => {
  console.log(req.params);
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