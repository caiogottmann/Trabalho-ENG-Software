<!----
titulo: String, required;
inputPlaceHolder: String, "";
nomeInput: String, required; 
tipo: String, "text";
alteravel: Boolean, true;
---->

<template>
  <div id="que">
    <label id="tit" :for="nomeInput" >{{titulo}}</label >  
    <input autocomplete="off" :name="nomeInput" :placeholder="inputPlaceHolder" :type="tipo" :disabled="inalteravel" />
  </div>
</template>

<script>
export default {
  name: "questao",
  props:{
    titulo:{
      type: String,
      required: true
    },
    inputPlaceHolder:{
      type: String,
      default: ""
    },
    nomeInput:{
      type: String,
      required: true
    },
    tipo:{
      type: String,
      default: "text"
    },
    inalteravel:{
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
#que{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: Lato-Bold;
  input{
    border: 0;
    border-radius: 5px;
    width: 100%;
    height: 40px;
  background-color: #F1F1F1;
  padding-left: 5px;
  }
  input:disabled{
  background-color: #D0D0D0;
  }
  input:focus{
    outline: 1px solid #555;
    -moz-outline-radius: 5px;

  }
}
@media (max-width: 1024px ) {
  
}
@media (max-width: 420px) {
}
</style>