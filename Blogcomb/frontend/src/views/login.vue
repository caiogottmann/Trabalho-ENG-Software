<template>
  <div>
    <div id="tudo"></div>
    <navbar />
    <div id="bloco">
      <h3>Entrar</h3>
      <form>
        <input placeholder="E-mail"/>
        <input placeholder="Senha"/>
        <input id="submit" type="submit" value="Entrar"/>
      </form>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'

export default{
  components: { navbar },
  setup() {
    
  },
}
</script>


<style lang="scss" scoped>
#tudo{
  background-color: #F0F0F0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
#bloco{
  padding-top: 20px;
  font-family: Lato-Bold;
  width: 30vw;
  height: 50vh;
  margin-left: 35vw;
  margin-top: 15vh;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;


    input{
      border: 2px solid #1B3458;
      border-radius: 5px;
      padding: 12px;
      margin-bottom:9%;
      width: 100%;
    }
    #submit{
      padding: 5px;
      width: 100px;
      background-color: #1B3458;
      color: #F0F0F0;
    }
  }
}


@media (max-width: 750px) {
  #bloco{
    margin-left: 10vw;
    width: 80vw;
    height: 60vh;
  }
}

</style>