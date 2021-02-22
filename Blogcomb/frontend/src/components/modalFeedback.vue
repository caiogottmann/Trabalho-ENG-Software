<template>
  <div v-if="ativado" id="background">
    <div id="popup">
      <img v-if="certo" src="@/assets/check.svg">
      <img v-else src="@/assets/close.svg">
      
      <p>{{mensagem}}</p>
      <button @click="desativa" id="botao">Fechar</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  props:{
    mensagem:{
      type: String,
      default: "Salvo com sucesso!"
    },
    ativado:{
      type: Boolean,
      required: true
    },
    certo:{
      type:Boolean,
      required: true
    }
  },
  methods:{
    desativa(){
      this.$emit('fecha', false);
    }
  }
}
</script>

<style lang="scss" scoped>
#popup{
  height: 300px;
  width: 726px;
  background-color: #fdfdfd;
  box-shadow: 5px 5px 50px 10px rgba(0, 0, 0, .2);
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    margin-top: 55.7px;
  }
  p{
    margin-top: 47px;
  }
  button{
    margin-top: 50px;
  }
}
#background{
  position: absolute;
  top: 0px;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, .0);
  display: flex;
  justify-content: center;
  align-items: center;
}
#botao{
  padding: 5px 19px;
  border: 1px solid #adadad;
  border-radius: 5px;
  background-color: #fdfdfd;
  color: #050505;
  font-family: Lato;
}
</style>