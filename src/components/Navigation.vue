<script setup lang="ts">
import { ref } from "vue"
import Burger from "./Burger.vue"
    
const burgerHover = ref(false)

</script>

<template>
    <section class="h-[20vh]">
        <div class="my-5 mx-8 flex justify-between">
            <div>
                <h2>N</h2>
            </div>
            <div class="flex h-8">
                <p style="color:#256EFF" class="transition-transform ease-in-out duration-300 font-header text-2xl mt-8 mr-4" :class="{ '-translate-y-7': burgerHover}">MENU</p>
                <Burger />
            </div>
        </div>
    </section>
</template>
