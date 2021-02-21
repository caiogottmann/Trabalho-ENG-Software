<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: Lato;
  src: url("assets/Lato/Lato-Medium.ttf") format("truetype");
  font-weight: normal;
}
@font-face {
  font-family: Lato-bold;
  src: url("assets/Lato/Lato-Bold.ttf") format("truetype");
}
@font-face {
  font-family: Lato-bolder;
  src: url("assets/Lato/Lato-Black.ttf") format("truetype");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
