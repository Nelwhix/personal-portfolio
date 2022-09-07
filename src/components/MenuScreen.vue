<script setup lang="ts">
    import { ref } from 'vue';
import Burger from './Burger.vue';

    const navMode = ref(false)
    const burgerHover = ref(false)
    const menuUp = () => (burgerHover.value = true)
    const menuDown = () => (burgerHover.value = false)
</script>

<template>
    <section style="background-color:#256EFF" class="z-50 absolute top-0 h-screen w-full" :class="{'hidden': navMode}">
        <div class="my-5 mx-8 flex justify-between">
            <div>
                <h2 class="text-2xl font-header text-white">N</h2>
            </div>
            <div class="flex h-8">
                <p style="color:#256EFF" class="transition-transform ease-in-out duration-300 font-header text-2xl mt-8 mr-4" :class="{ '-translate-y-7': burgerHover}">CLOSE</p>
                <Burger />
            </div>
        </div>
        <nav class="text-white grid justify-end gap-1 mr-16 font-header text-[80px] mt-12">
            <router-link to="#" class="text-end">HOME</router-link>
            <router-link to="#" class="text-body navLinks" data-text="PROJECTS">PROJECTS</router-link>
            <router-link to="#" class="navLinks text-body" data-text="ABOUT">ABOUT</router-link>
            <router-link to="#" class="navLinks text-body" data-text="CONTACT">CONTACT</router-link>
        </nav>
    </section>
</template>

<style scoped>
    .burger-lines {
        width: 40px;
        height: 4px;
        background-color: black;
        margin: 4px 0;
    }

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
        height:83px;
        color: #256eff;
        top: 0;
        text-align: end;
    }

    .navLinks:hover:before {
        height: 0;
    }
</style>