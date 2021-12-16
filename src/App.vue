/* eslint-disable prettier/prettier */
<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'props' }">Send data with Props</router-link> |
      <router-link :to="{ name: 'refs' }">Send data with $refs</router-link> |
      <router-link :to="{ name: 'vuex' }"
        >Send data with sendDataWithVuex</router-link
      >|
      <router-link :to="{ name: 'parent' }">Send data with Parent</router-link>|
      <router-link :to="{ name: 'prototype' }"
        >Send data with prototype</router-link
      >|
      <router-link :to="{ name: 'Provide' }"
        >Send data with Inject/Provide</router-link
      >
    </div>
    <router-view />
  </div>
</template>
<style>
/* @import "~/node_modules/bulma/sass/utilities/_all"; */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
