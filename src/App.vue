<script setup lang="ts">
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import MenuScreen from "./components/MenuScreen.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <Navigation />
  <MenuScreen />
  <RouterView />
  <Footer />
</template>