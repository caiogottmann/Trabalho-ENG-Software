<template>
  <div>
    <sidebar/>
    <navbar-admin/>
  </div>
</template>

<script>
import NavbarAdmin from '../components/navbarAdmin.vue'
import Sidebar from '../components/sidebar.vue'



export default {
  components:{
    Sidebar,
    NavbarAdmin
  }  
}
</script>

<style scoped>

</style>