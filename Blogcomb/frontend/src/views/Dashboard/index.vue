<template>
  <div class="body">
    <sidebar />
    <navbar-admin />
    <transition name="fade" mode="out-in" :appear="false">
      <router-view class="viewDash" />
    </transition>
  </div>
</template>

<script>
import NavbarAdmin from "@/components/navbarAdmin.vue";
import Sidebar from "@/components/sidebar.vue";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    NavbarAdmin,
  },
};
</script>

<style lang="scss" scoped>
.body {
  overflow-x: hidden;
  max-width: 100vw;
  min-height: 100vh;
  background-color: #fafbff;
}
.viewDash {
  margin-left: 300px;
}

@media only screen and (max-width: 1300px) {
  .viewDash {
    margin-left: 290px;
  }
}

@media only screen and (max-width: 580px) {
  .viewDash {
    margin-left: 260px;
  }
}

@media only screen and (max-width: 750px) {
  .viewDash {
    margin-left: 0;
    margin-top: 62px;
  }
}

.fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out, transform 0.5s ease;
}

.fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
