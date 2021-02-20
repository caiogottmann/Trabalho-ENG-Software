<template>
  <div>
    <!-- Image and text -->
    <b-navbar id="navbar">
      <b-navbar-brand href="#">
        <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
        BootstrapVue
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="#">Post</b-nav-item>
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
}

#navbar >>> .nav-item{
  color: #fdfdfd;
}
</style>