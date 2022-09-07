<script setup lang="ts">
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import MenuScreen from "./components/MenuScreen.vue";

</script>

<template>
  <Navigation />
  <MenuScreen />
  <RouterView />
</template>
