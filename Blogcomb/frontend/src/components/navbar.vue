<template>
  <div>
  <b-navbar toggleable="lg" id="navbar">
      <b-navbar-brand href="#" id="brand_minha">
        <img src="@/assets/logo.png" id="logo" alt="Logo">
        BlogComb
      </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Post</b-nav-item>
        <b-nav-item href="/cadastrarEmail">Cadastrar e-mail</b-nav-item>
        <b-nav-item href="#">Contato</b-nav-item>


      </b-navbar-nav>
    </b-collapse>
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