<template>
  <div>
    <div id="form">
      <div id="titulo">
        <h2>Post</h2>
      </div>
      <form>
      <div class="dusasQuestoes">
        <questao class="question" titulo="Id" nomeInput="id" expRegular="^[0-9]" :requerido="true" inputPlaceHolder="exem.plo1@exem.com" inalteravel="false"/>
        <questao class="question" titulo="Título" nomeInput="titulo" expRegular="\w*" :requerido="true" inputPlaceHolder="Titulo do texto"/>
      </div>
      <div id="umaQuestao">
        <label  >Texto</label >  
        <textarea rows="10" />
      </div>
       <div class="dusasQuestoes">
        <questao class="question" titulo="Data de Postagem" nomeInput="data" :requerido="true" inputPlaceHolder="06/06/2021" tipo="date" />
        <questao class="question" titulo="Tag" nomeInput="tag" expRegular="^[0-9]" :requerido="true" inputPlaceHolder="Rh, Ps, soft skills" />
      </div>
      <div id="divbut">
        <button id="botao">Salvar</button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
import Questao from '../../components/questao.vue'



export default {
  components:{
    Questao
  }  
}
</script>

<style lang="scss" scoped>
#form{
  width: 80vw;
  padding-left: 30px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
}
#titulo{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1vh;
}

.dusasQuestoes{
  display: flex;
  margin-bottom: 10px;
  .question{
    margin-right: 10%;
  }
}
#umaQuestao{
  font-family: Lato-Bold;
  display: flex;
  flex-direction: column;
  margin-right: 10%;
  margin-bottom: 10px;
  label{
    text-align: start;
  }
  textarea{
    border: 0;
    border-radius: 5px;
    width: 100%;
    background-color: #F1F1F1;
    padding-left: 5px;
    resize: none;

  }
  textarea:focus{
    outline: 1px solid #555;
    -moz-outline-radius: 5px;

  }
}

#divbut{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10%;
}
#botao{
  padding: 5px 19px;
  border: 0px solid #adadad;
  border-radius: 5px;
  background-color: #28A745;
  color: #f9f9f9;
  font-family: Lato;
}
</style>