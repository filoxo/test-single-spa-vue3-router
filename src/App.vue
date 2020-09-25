<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <span>{{ username || "default user" }} </span>
  <router-link to="/home">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>

  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  computed: {
    username() {
      console.log("$route", this.$route);
      // We will see what `params` is shortly
      return this.$route.params.username;
    },
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
