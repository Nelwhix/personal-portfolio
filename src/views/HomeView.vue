<script setup lang="ts">
import ProjectCard from "../components/ProjectCard.vue";
import projects from "../assets/projects.json";

const portfolios = projects;
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
                        I love making web apps that are fun to use
                    </span>
                </p>
                <p class="mt-5 text-sm md:text-lg">I'm a Fullstack developer with 2+ years experience building products that
                    satisfy client needs with Laravel and Vuejs. I am diligent and handle projects to the best of my ability
                </p>
                <a class="mt-5 border-2 border-body
                rounded-md p-3 fill-button fill-image mb-10 md:mb-0" href="https://ibb.co/MckKdhL" download>
                    Resume
                </a>
            </div>
            <div class="col">
                <img src="https://i.ibb.co/TqQnqDS/4-C4-FEAF2-1-AA2-407-F-98-C9-DB29-B2-CB3-AFC.jpg" alt="headshot" class="md:mt-0 md:ml-10 w-96 rounded-md">
            </div>
        </div>
        <h2 class="mt-10 text-3xl">Projects <span class="opacity-50">( ) {</span></h2>
        <div class="mt-6" id="projects">
            <!-- <div class="flex justify-between w-2/5">
                <button>
                    <span class="border py-1 px-2 rounded-md active">Frontend</span>
                </button>
                <button>
                    <span class="border py-1 px-2 rounded-md hover:border-[#256eff]">
                        Backend
                    </span>
                </button>
               <button>
                    <span class="border py-1 px-2 rounded-md hover:border-[#256eff]">
                        CLI
                    </span>
                </button>
                <button>
                    <span class="border py-1 px-2 rounded-md hover:border-[#256eff]">
                        Open Source
                    </span>
                </button>
            </div> -->
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