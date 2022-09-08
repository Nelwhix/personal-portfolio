<script setup lang="ts">
import Mail from "../assets/icons/Mail.vue";

const year: string = new Date().getFullYear().toString()
</script>

<template>
    <section class="mt-10 px-10 font-logo" id="contact">
        <h2 class="desc mb-5 text-white text-5xl">Get in Touch!</h2>
        <p>If you need me for a gig or want to talk about anything Laravel, Tailwind and VueJS. Hit me up!</p>
        <button class="mt-5 border-2 border-body
                rounded-md px-2 py-4 fill-button fill-image mb-10"><Mail class="inline mr-2 -mt-1" />Send an email</button>
        <div class="flex justify-between">
            <div class="flex gap-2 desc text-xl text-white mb-10">
                <a href="mailto:nelsonisioma1@gmail.com"><span>Email</span></a>
                <a href="https://github.com/Nelwhix" class="desc"><span>Github</span></a>
                <a href="https://twitter.com/nelson_isioma" target="_blank" class="desc"><span>Twitter</span></a>
            </div>
            <p>Copyright © {{ year }} Nelson Isioma</p>
        </div>
    </section>
</template>