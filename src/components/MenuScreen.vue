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
            <div class="flex overflow-hidden h-8">
                <p style="color:#256EFF" class="transition-transform ease-in-out duration-300 font-header text-2xl mt-8 mr-4" :class="{ '-translate-y-7': burgerHover}">CLOSE</p>
                <Burger />
            </div>
        </div>
    </section>
</template>

<style scoped>
    .burger-lines {
        width: 40px;
        height: 4px;
        background-color: black;
        margin: 4px 0;
    }
</style>