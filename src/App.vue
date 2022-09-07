<script setup lang="ts">
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import MenuScreen from "./components/MenuScreen.vue";

</script>

<template class="app">
  <Navigation />
  <MenuScreen />
  <RouterView />
</template>

<style>
  .app {
    background-image: url('./assets/bgcover.svg');
    background-repeat: repeat;
  }
</style>