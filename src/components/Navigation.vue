<script setup lang="ts">
import { ref } from "vue"
import Burger from "./Burger.vue"
import Logo from "../assets/icons/logo.vue"
    
const burgerHover = ref(false)
const closeUp = () => (burgerHover.value = true)
const closeDown = () => (burgerHover.value = false)
</script>

<template>
    <section class="h-[15vh] sticky top-0 backdrop-blur-md">
        <div class="my-5 mx-8 md:mx-24 flex justify-between">
            <router-link :to="{name: 'home'}" class="text-body mt-3">
                <Logo />
            </router-link>
            <div class="flex overflow-hidden h-8 mt-3">
                <p style="color:#256EFF" class="transition-transform ease-in-out duration-300 font-header text-2xl mt-8 mr-4" :class="{ '-translate-y-7': burgerHover}">MENU</p>
                <Burger @mouseover="closeUp" @mouseout="closeDown"/>
            </div>
        </div>
    </section>
</template>
