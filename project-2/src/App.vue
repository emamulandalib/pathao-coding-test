<template>
  <div id="app">
    <HelloWorld :data="data"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from 'axios';

export default {
  name: "app",

  data: () => ({
    data: []
  }),

  beforeMount() {
    let self = this;
    axios.get("data.json").then((resp) => {
      self.data = resp.data;
    });
  },

  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
