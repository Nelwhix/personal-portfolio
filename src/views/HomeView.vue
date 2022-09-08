<script setup lang="ts">
import ProjectCard from "../components/ProjectCard.vue";
import projects from "../assets/projects.json";

const portfolios = projects;
</script>

<template>
    <section class="px-10 font-logo">
        <div class="grid gap-0 grid-rows-1 sm:grid-cols-2 mb-0">
            <div class="col">
                <p>
                    <span class="text-xl">
                        Hello! 
                        <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt="waving hand" class="w-6 inline">
                        , my name is <span class="block text-6xl">Isioma Nelson</span></span> 
                    <span class="text-4xl text-white desc mt-5">
                        I love making web apps that are fun to use
                    </span>
                </p>
                <p class="mt-5 text-sm md:text-lg">I'm a web developer specialized in building
                    backend systems. then I play with Vue from time 
                    to time. I am diligent and do my projects to the best of my ability
                </p>
                <a class="mt-5 border-2 border-body
                rounded-md p-3 fill-button fill-image mb-10 md:mb-0" href="../assets/resume.pdf" download>
                    Resume
                </a>
            </div>
            <div class="col">
                <img src="../assets/headshot.HEIC" alt="" class="md:mt-0 md:ml-10 w-96 rounded-md">
            </div>
        </div>   
        <h2 class="mt-10 text-3xl">Projects <span class="opacity-50">( ) {</span></h2>
        <div class="mt-6">
            <p>There are about <span class="text-body font-semibold text-xl">{{portfolios.length}}</span> projects listed here and more to come</p>
            <div class="mb-10 grid grid-flow-row sm:grid-cols-2 sm:gap-4 md:gap-4 md:grid-cols-3">
                <ProjectCard v-for="portfolio in portfolios.slice(0,6)" :key="portfolio.id" :portfolio="portfolio" class="transition-transform hover:scale-105 hover:duration-500 ease-in-out" />
            </div>
        </div>
        <span class="opacity-50 text-3xl">}</span>
    </section>
</template>

<style>
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