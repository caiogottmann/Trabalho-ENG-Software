<template>
  <div>
    <b-navbar toggleable="lg" id="navbar">
      <b-navbar-brand href="#" id="brand_minha">
        <img src="@/assets/logo.png" id="logo" alt="Logo">
        <p v-if="!isPhone()"> Blog da Comb Jr. - {{pagina}} </p>
      </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
        <button id="botao">Fechar</button>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      pagina: "Administração dos Posts"
    }
  },
  methods:{
    isPhone(){
      return window.innerWidth < 450;

    }
  }
}
</script>


<style lang="scss" scoped>
#botao{
  padding: 5px 19px;
  border: 1px solid #adadad;
  border-radius: 5px;
  background-color: #fdfdfd;
  color: #050505;
  font-family: Lato;
}
#navbar{
  background-color: #1793A6;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-left: 20%;
  
}

#navbar ::v-deep .nav-link{
  color: #fdfdfd;
  margin-right: 3vw;
}

#navbar ::v-deep .navbar-brand{
  color: #fdfdfd;
}

#brand_minha{
  margin-left: 3vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  p{
    margin: 0;
    font-size: 17px;
  }
}
#logo{
  margin-right: 1vw;
}
</style>