<template>
  <div class="SidebarBody">
    <b-sidebar
      :sidebar-class="['Sidebar',{resize: !isClosed}]"
      id="sidebar-1"
      :visible="true"
      bg-variant="none"
      shadow
      :no-header="true"
      :no-header-close="true"
      no-close-on-route-change
    >
      <div class="d-flex justify-content-start" v-if="telaMobile">
        <b-button @click="isClosed = !isClosed" class="Button" visible="true">
          <b-icon icon="list"></b-icon>
        </b-button>
      </div>

      <div class="ImgSet">
        <div v-if="!telaMobile() || !isClosed" class="User">
          <b-img class="Image" :src="require('../assets/ImagemPerfil.png')"></b-img>

          <p class="NameUser">Administrador</p>
          <p class="NameUser1">Carlos Alberto</p>
        </div>

        <b-nav-item v-on:click="$router.push('/admin/apresentacao')" :active="true" href="/post" class="Button1">
          <b-img clsss="Icon" :src="require('../assets/post.svg')" />
          <span v-if="!telaMobile() || !isClosed">Posts</span>
        </b-nav-item>

        <b-nav-item v-on:click="$router.push('/admin/etapas')" :active="true" class="Button1">
          <b-img clsss="Icon" :src="require('../assets/membros.svg')" />
          <span v-if="!telaMobile() || !isClosed">Membros</span>
        </b-nav-item>

        <b-nav-item v-on:click="$router.push('/admin/inscricoes')" class="Button1">
          <b-img clsss="Icon" :src="require('../assets/email.svg')" />
          <span v-if="!telaMobile() || !isClosed">Emails automáticos</span>
        </b-nav-item>

      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SidebarAdmin",
  data() {
    return {
      widthAtual: null,
      isClosed: true
    };
  },
  methods: {
    checaTamanho() {
      this.widthAtual = window.innerWidth;
    },
    telaMobile() {
      return this.widthAtual <= 750;
    }
  },
  created() {
    window.addEventListener("resize", this.checaTamanho);
    this.checaTamanho();
  },
  destroyed() {
    window.removeEventListener("resize", this.checaTamanho);
  }
  
};
</script>

<style scoped>
.nav-link {
  color: #ffffff !important;
  width: max-content !important;
}

.Button1 {
  color: #ffffff !important;
  position: relative;
  right: 1rem;
  list-style: none;
}

.Button {
  padding: 5px 20px;
  background-color: #1b3458;
  color: #ffffff;
  border: #1b3458;
  border-radius: 0px !important;
}

.ImgSet {
  text-align: left;
  padding-left: 1.8rem;
  font-size: 18px;
}

.Image {
  padding-bottom: 5rem;
  padding-top: 5rem;
  text-align: left;
  width: 63px;
  height: auto;
  color: #ffffff;
}

.User {
  color: #ffffff;
  height: 12.5rem;
  width: 10rem;
}

.NameUser {
  color: #ffffff;
  position: relative;
  bottom: 8.5rem;
  left: 5rem;
  width: 10rem;
}

.NameUser1 {
  color: #ffffff;
  position: relative;
  bottom: 9.5rem;
  left: 5rem;
  font-size: 12px;
}

img {
  margin-right: 0.5rem;
}
@media screen and (max-width: 750px) {
  .ImgSet {
    padding-left: 1rem;
  }
  .Button {
    padding: 12px;
  }
}
</style>

<style>
.SidebarBody .Sidebar {
  background-color: #1b3458;
  width: 280px;
}
@media screen and (max-width: 750px) {
  .SidebarBody .Sidebar {
    width: 43px;
    transition: width 0.5s;
  }
  .SidebarBody .resize {
    width: 280px;
  }
}
</style>
