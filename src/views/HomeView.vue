<script setup lang="ts">

</script>

<template>
    <section class="px-10 font-logo">   
        <p>
            <span class="text-xl">
                Hello! 
                <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt="waving hand" class="w-6 inline">
                , my name is <span class="block text-6xl">Isioma Nelson</span></span> 
            <span class="text-4xl text-white desc">
                I love making web apps that are fun to use
            </span>
        </p>
        <p>I'm a web developer specialized in building
            backend systems. then I play with Vue from time 
            to time. I am diligent and do my projects to the best of my ability
        </p>
        <a class="mt-5 border-2 border-body
        rounded-md p-3 fill-button fill-image" href="../assets/resume.pdf" download>
            Resume
        </a>

        <img src="../assets/headshot.HEIC" alt="" class="mt-10 w-96 rounded-md">

        <h2 class="mt-10 text-3xl">Projects <span class="opacity-50">( ) {</span></h2>
    </section>
</template>

<style scoped>
    .desc {
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }
    .fill-button {
        display: inline-block;
        overflow: hidden;
        color: #256eff;
        background-position: 0 -100%;
        background-repeat: repeat-x;
        transition: background-position 1s ease;
    }

    .fill-button:hover {
        background-position: 100% 50%;
        border-color: #256eff;
        color: white;
    }

    .fill-image {
        background-image: url('../assets/liquid.svg');
    }

</style>