<template>
  <div>
    <navbar />
    <div id="pagina">
      <div id="formulario">
        <h1 id="titulo">CADASTRE SEU E-MAIL</h1>
        <form id="forms">
          <questao titulo="Nome:" nomeInput="nome" />
          <questao class="espaco" titulo="Email:" nomeInput="nome" :inalteravel="true"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import Questao from '../components/questao.vue'
export default {
  components:{
    Navbar,
    Questao
  }
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