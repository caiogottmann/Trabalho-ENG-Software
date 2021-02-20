<template>
  <div class="home">
    <cadastrar-email />
  </div>
</template>

<script>
// @ is an alias to /src
import CadastrarEmail from './cadastrarEmail.vue';

export default {
  name: "Home",
  components: {
    CadastrarEmail
  }
};
</script>
