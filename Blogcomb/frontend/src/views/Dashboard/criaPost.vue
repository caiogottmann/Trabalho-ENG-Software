<template>
  <div>
    <div id="form">
      <div id="titulo">
        <h2>Post</h2>
      </div>
      <form id="forms" @submit.prevent="onSubmit">
        <div class="dusasQuestoes">
          <questao
            class="question"
            titulo="Seu id"
            nomeInput="id"
            expRegular="^[0-9]*"
            :requerido="true"
            :inalteravel="edit"
          />
          <questao
            class="question"
            titulo="Título"
            nomeInput="titulo"
            expRegular="\w*"
            :requerido="true"
            inputPlaceHolder="Titulo do texto"
          />
        </div>
        <div id="umaQuestao">
          <label>Texto</label>
          <textarea rows="10" />
        </div>
        <div class="dusasQuestoes">
          <questao
            class="question"
            titulo="Data de Postagem"
            nomeInput="data"
            :requerido="true"
            inputPlaceHolder="06/06/2021"
            tipo="date"
            :inalteravel="edit"
          />
          <questao
            class="question"
            titulo="Tag"
            nomeInput="tag"
            expRegular="^[\w\u002C\s]*"
            :requerido="true"
            inputPlaceHolder="Rh, Ps, soft skills"
          />
        </div>
        <div id="divbut">
          <button id="botao">Salvar</button>
        </div>
      </form>
    </div>
    <modal-feedback
      @fecha="redirect"
      :certo="true"
      mensagem="Enviado com sucesso!"
      :ativado="showSucess"
    />
    <modal-feedback
      @fecha="showError = false"
      :certo="false"
      mensagem="Erro ao enviar"
      :ativado="showError"
    />
  </div>
</template>

<script>
import Questao from "@/components/questao.vue";
import criaPost from "@/services/api/criaPost.js";
import ModalFeedback from "@/components/modalFeedback.vue";

export default {
  components: {
    Questao,
    ModalFeedback,
  },
  data() {
    return {
      showError: false,
      showSucess: false,
      showSpinner: false,
      id: this.$route.params.id,
      edit: false,
    };
  },
  mounted() {
    if (this.id) {
      this.edit = true;
      this.getPost();
    }
  },
  methods: {
    redirect(){
      this.$router.push({ path: "/post" });
    },
    dataAtualFormatada(d) {
      var data = new Date(d);
      var dia = data
        .getDate()
        .toString()
        .padStart(2, "0");
      var mes = (data.getMonth() + 1).toString().padStart(2, "0"); //+1 pois no getMonth Janeiro começa com zero.
      var ano = data.getFullYear();
      return ano + "-" + mes + "-" + dia;
    },
    getPost() {
      criaPost.getPost(this.id).then((res) => {
         let inputes = document.getElementsByTagName("input");
      inputes[0].value = res.data.creator;
      inputes[1].value = res.data.titulo;
      inputes[2].value = this.dataAtualFormatada(res.data.data);
      var stringTags =""
       res.data.tag.map((tags) => {
            stringTags += tags + ", ";
          });
      inputes[3].value = stringTags.replace(/,\s*$/, "");
      document.getElementsByTagName("textarea")[0].value = res.data.texto;
      });
    },
    onSubmit() {
      let inputes = document.getElementsByTagName("input");
      let valorAreaTexto = document.getElementsByTagName("textarea")[0].value;
      let valores = [
        inputes[0].value,
        inputes[1].value,
        inputes[2].value,
        inputes[3].value,
      ];
      console.log(inputes);
      console.log(valores);

      valores[3] = valores[3].replace(", ", ",");
      valores[3] = valores[3].split(",");

      console.log(valores[3]);
      this.showSpinner = true;
      const data = {
        postId: this.id,
        titulo: valores[1],
        texto: valorAreaTexto,
        data: valores[2],
        tag: valores[3],
        creator: valores[0],
      };
      this.form = [];
      console.log(data);
      if (this.id) {
        criaPost
          .editPost(data)
          .then(() => {
            this.showSucess = true;
          })
          .catch(() => {
            this.showError = true;
          });
      } else {
        criaPost
          .criaPost(data)
          .then(() => {
            this.showSucess = true;
            console.log("deu bom");
            document.getElementById("forms").reset();
          })
          .catch(() => {
            this.showError = true;
            console.log("deu ruim");
          });
      }
    },
    enter: function() {
      var that = this;

      setTimeout(function() {
        that.showSucess = false;
        that.showError = false;
        that.showSpinner = false;
      }, 3200);
      setTimeout(function() {
        that.showSpinner = false;
      }, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
#form {
  width: 80vw;
  padding-left: 30px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
}
#titulo {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1vh;
}

.dusasQuestoes {
  display: flex;
  margin-bottom: 10px;
  .question {
    margin-right: 10%;
  }
}
#umaQuestao {
  font-family: Lato-Bold;
  display: flex;
  flex-direction: column;
  margin-right: 10%;
  margin-bottom: 10px;
  label {
    text-align: start;
  }
  textarea {
    border: 0;
    border-radius: 5px;
    width: 100%;
    background-color: #f1f1f1;
    padding-left: 5px;
    resize: none;
  }
  textarea:focus {
    outline: 1px solid #555;
    -moz-outline-radius: 5px;
  }
}

#divbut {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10%;
}
#botao {
  padding: 5px 19px;
  border: 0px solid #adadad;
  border-radius: 5px;
  background-color: #28a745;
  color: #f9f9f9;
  font-family: Lato;
}
</style>
