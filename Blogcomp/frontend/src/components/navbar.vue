<template>
  <div>
    <!-- Image and text -->
    <b-navbar id="navbar">
      <b-navbar-brand href="#" id="brand_minha">
        <img src="@/assets/logo.png" id="logo" alt="Logo">
        BootstrapVue
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="#">Post</b-nav-item>
        <b-nav-item href="/cadastrarEmail">Cadastrar e-mail</b-nav-item>
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
  color: #fdfdfd;
  margin-right: 3vw;
}

#navbar ::v-deep .navbar-brand{
  color: #fdfdfd;
}

#brand_minha{
  margin-left: 3vw;
}
#logo{
  margin-right: 1vw;
}
</style>