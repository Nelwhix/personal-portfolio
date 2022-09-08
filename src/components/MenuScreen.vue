<script setup lang="ts">
import { ref } from 'vue';
import Burger from './Burger.vue';
import { useAppStore } from '@/stores/appstore';
import Logo from '@/assets/icons/logo.vue';

const store = useAppStore()
const burgerHover = ref(false)
const closeUp = () => (burgerHover.value = true)
const closeDown = () => (burgerHover.value = false)

const chMod = () => {
    store.navMode = !store.navMode
    store.menuMode = !store.menuMode
}
</script>

<template>
    <section style="background-color:#256EFF" class="z-50 fixed top-0 h-screen w-full" :class="{ 'hidden': store.menuMode }">
        <div class="my-5 mx-8 md:mx-24 flex justify-between">
            <div class="text-white">
                <Logo />
            </div>
            <div class="flex overflow-hidden h-10">
                <p class="transition-transform ease-in-out duration-500 font-header text-2xl text-white mt-10 mr-4" :class="{ '-translate-y-8': burgerHover}">CLOSE</p>
                <Burger @mouseover="closeUp" @mouseout="closeDown"/>
            </div>
        </div>
        <nav class="text-white grid justify-end gap-1 mr-10 md:mr-16 font-header text-6xl md:text-[5rem] mt-12">
            <router-link :to="{name: 'home'}" class="text-end nav-link">HOME</router-link>
            <a href="#projects" @click="chMod" class="text-body nav-link navLinks" data-text="PROJECTS">PROJECTS</a>
            <a href="#contact" @click="chMod" class="navLinks nav-link text-body" data-text="CONTACT">CONTACT</a>
        </nav>
    </section>
</template>

<style scoped>
    .navLinks {
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: white;
        color: white;
        position: relative;
        text-align: end;
        line-height: 90px;
    }

    .navLinks:before {
        transition: height 0.5s ease;
        content: attr(data-text);
        position: absolute;
        overflow: hidden;
        height: 83px;
        color: #256eff;
        top: 0;
        text-align: end;
    }

    .navLinks:hover:before {
        height: 0;
    }

    .nav-link {
        opacity: 0;
        animation: show-nav 0.3s ease-out both;
    }

    @keyframes show-nav {
        from {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    .nav-link:nth-child(1) {
        animation-delay: 0.3s;
    }

    .nav-link:nth-child(2) {
        animation-delay: 0.45s;
    }

    .nav-link:nth-child(3) {
        animation-delay: 0.6s;
    }

    .nav-link:nth-child(4) {
        animation-delay: 0.75s;
    }
</style>