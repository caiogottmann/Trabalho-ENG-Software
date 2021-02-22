<template>
  <div>
    <navbar />
    <div id="pagina">
      <div id="formulario">
        <h1 id="titulo">CADASTRE SEU E-MAIL</h1>
        <form id="forms" @submit.prevent="onSubmit">
          <questao titulo="Nome:" nomeInput="nome" expRegular="^[A-Za-z\s]*$" inputPlaceHolder="Fulano de Tal" :requerido="true"/>
          <questao class="espaco" titulo="Email:" nomeInput="email" expRegular="^[\w\u002E]+@[\w]+(\u002E\w+)+$" :requerido="true" inputPlaceHolder="exem.plo1@exem.com"/>
          <div id="envoltaBut">
            <input type="submit" id="botao" value="Enviar"/>
          </div>
        </form>
      </div>
    </div>
    <modal-feedback @fecha="showSucess = false" :certo="true" mensagem="Enviado com sucesso!" :ativado="showSucess" />
    <modal-feedback @fecha="showError = false" :certo="false" mensagem="Erro ao enviar" :ativado="showError" />
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import Questao from '../components/questao.vue'
import formEmail from  '@/services/api/formEmail.js'
import ModalFeedback from '../components/modalFeedback.vue'


export default {
  components:{
    Navbar,
    Questao,
    ModalFeedback
  },
  data(){
    return{
      showError: false,
      showSucess: false,
      showSpinner: false,
    }
  },
  methods: {
    onSubmit() {
      let inputes = document.getElementsByTagName('input');
      let valores = [inputes[0].value, inputes[1].value];
      console.log(inputes);
      console.log(valores);
      
      this.showSpinner = true;
      const data = {
        nome: valores[0],
        email: valores[1],
      };

      this.form = [];
      // console.log(data);
      formEmail
        .formEmail(data)
        .then(() => {
          this.showSucess = true;
          console.log("deu bom");
          document.getElementById("forms").reset();
        })
        .catch(() => {
          this.showError = true;
          console.log("deu ruim");
        });
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


}
</script>

<style scoped>
#pagina{
  width: 100vw;
  display: flex;
  justify-content: center;
}
#formulario{
  width: 30vw;
}
#titulo{
  padding-top: 10vh;
  padding-bottom: 10vh;
  font-family: Lato-bolder;
  font-size: 30px;
}
.espaco{
  margin-top: 10px;
}
#botao{
  padding: 8px 19px;
  border: 0px;
  border-radius: 5px;
  background-color: #1B3458;
  color: #fdfdfd;
  font-family: Lato;
}
#envoltaBut{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  height: 80px;
  align-items: center;

}
@media (max-width: 1024px ) {
  #formulario{
    width: 50vw;
  }
}
@media (max-width: 420px) {
  #formulario{
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #forms{
    width: 80vw;
  }
}
</style>