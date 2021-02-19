<template>
  <div>
  <b-navbar id="navbar">
    <b-navbar-brand href="#">
      <img src="@/assets/logo.png" id="logo" alt="Logo">
      Blogcomb 
    </b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item href="#">Posts</b-nav-item>
      <b-nav-item href="#">Cadastrar e-mail</b-nav-item>
      <b-nav-item href="#">Contato</b-nav-item>

    </b-navbar-nav>
  </b-navbar>
</div>
</template>


<script>
export default {
  
}
</script>


<style lang="scss" scoped>
#navbar{
  background-color: #1793A6;
  display: flex;
  justify-content: space-between;
  
}

#navbar ::v-deep .nav-link{
  color: #fdfdfd !important;
  margin-right: 3vw;
}
#navbar ::v-deep  .navbar-brand{
  color: #fdfdfd !important;
  margin-left: 2vw;
}

#logo{
  margin-right: 1vw;
}
</style>