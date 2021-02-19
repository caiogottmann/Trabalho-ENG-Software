<template>
  <div class="home">
    <navbar />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/navbar.vue';

export default {
  name: "Home",
  components: {
    Navbar
  }
};
</script>
