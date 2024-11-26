<script setup lang="ts">
import ProjectCard from "../components/ProjectCard.vue";
import projects from "../assets/projects.json";

const portfolios = projects;
const currentDate = new Date();
const experience = currentDate.getFullYear() - 2019
</script>

<template>
    <section class="px-10 font-logo mt-10">
        <div class="grid sm:justify-between grid-rows-1 sm:grid-cols-2 mb-0">
            <div class="col">
                <p>
                    <span class="text-xl">
                        Hello!
                        <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt="waving hand" class="w-6 inline">
                        , my name is <span class="block text-6xl">Isioma Nelson</span></span>
                    <span class="text-4xl text-white desc mt-5">
                        from Lagos, Nigeria
                    </span>
                </p>
                <p class="mt-5 text-sm md:text-lg">I'm a Software Engineer with {{experience}}+ years experience building products that
    satisfy client needs. I am diligent and handle projects to the best of my ability.
                </p>
                <a 
                    class="mt-5 border-2 border-body rounded-md p-3 fill-button fill-image mb-10 md:mb-0" 
                    href="https://docs.google.com/document/d/1pn_e7lHtNug9uGsp6IaCWP_RmBlMtTzHwTvMquw7yuA/edit?usp=sharing"
                    target="_blank"
                    >
                    Resume
                </a>
            </div>
        </div>
        <h2 class="mt-10 text-3xl">Projects <span class="opacity-50">( ) {</span></h2>
        <div class="mt-6" id="projects">
            This is a collection of my side-projects. For my professional work, check out my Resume
            <div class="mb-10 grid grid-flow-row sm:grid-cols-2 sm:gap-4 md:gap-4 md:grid-cols-3">
                <ProjectCard v-for="portfolio in portfolios" :key="portfolio.id" :portfolio="portfolio" class="transition-transform hover:scale-105 hover:duration-500 ease-in-out" />
            </div>
        </div>
        <span class="opacity-50 text-3xl">}</span>
    </section>
</template>

<style>
    .active {
        color: white !important;
        background-color: #256eff !important;
    }
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