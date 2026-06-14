<script setup lang="ts">
import ProjectCard from "../components/ProjectCard.vue";
import Redirect from "../assets/icons/redirect.vue";
import projects from "../assets/projects.json";

const portfolios = projects;
const currentDate = new Date();
const experience = currentDate.getFullYear() - 2021

const openSourceContributions = [
    {
        name: "Lemonsqueezy Laravel",
        link: "https://github.com/lmsqueezy/laravel",
        description: "I maintain the Lemonsqueezy Laravel package, helping Laravel apps add merchant-of-record payments, subscriptions, and course sales.",
        highlights: ["Package maintainer", "Laravel", "Subscriptions"]
    },
    {
        name: "Traefik",
        link: "https://github.com/traefik/traefik/pulls?q=is:pr+author:Nelwhix+",
        description: "I contribute to Traefik, the open-source reverse proxy and load balancer written in Go.",
        highlights: ["Passive health checks", "Certificate authority config", "User issue fixes"]
    },
    {
        name: "Laravel Twitter Notification Driver",
        link: "https://github.com/laravel-notification-channels/twitter",
        description: "I migrated the community-maintained Laravel notification channel from Twitter API v1 to v2.",
        highlights: ["API migration", "Laravel", "Community package"]
    }
]

const phpArchitectProfile = "https://www.phparch.com/community/nelson-isioma/";
const phpArchitectInterview = "https://www.youtube-nocookie.com/embed/CsEHa1Sz5Cg";
const apiDaysTalk = "https://www.linkedin.com/posts/api-conf-lagos_apiconflagos-apiconflagos2025-apiconfxapidays-activity-7352273882042494977-xPMo?utm_medium=ios_app&rcm=ACoAACthelgBJBGfu6xnRyZI-dK7Un4B6zVz1VE&utm_source=social_share_send&utm_campaign=copy_link";
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
        <h2 class="mt-16 text-3xl">Open Source <span class="opacity-50">( ) {</span></h2>
        <div class="mt-6" id="open-source">
            <p class="text-sm md:text-lg">
                I maintain and contribute to developer tools across the PHP, Laravel, Go, and infrastructure ecosystems.
            </p>
            <div class="mb-10 grid grid-flow-row sm:grid-cols-2 sm:gap-4 md:gap-4 md:grid-cols-4">
                <a
                    v-for="contribution in openSourceContributions"
                    :key="contribution.name"
                    :href="contribution.link"
                    class="group mt-5 flex min-h-[18rem] flex-col rounded-md bg-blue-500 px-5 py-8 text-white transition-transform hover:scale-105 hover:duration-500 ease-in-out"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div class="flex items-start justify-between gap-4">
                        <span class="text-sm uppercase tracking-wider opacity-80">Contribution</span>
                        <Redirect class="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                    <h3 class="mt-6 text-2xl font-bold leading-tight">{{ contribution.name }}</h3>
                    <p class="mt-4 text-sm font-thin md:text-base">{{ contribution.description }}</p>
                    <div class="mt-auto flex flex-wrap gap-2 pt-6 text-sm">
                        <span
                            class="rounded-md border px-2 py-1"
                            v-for="highlight in contribution.highlights"
                            :key="highlight"
                        >
                            {{ highlight }}
                        </span>
                    </div>
                </a>
            </div>
        </div>
        <span class="opacity-50 text-3xl">}</span>
        <h2 class="mt-10 text-3xl">Writing & Speaking <span class="opacity-50">( ) {</span></h2>
        <div class="mt-6" id="writing-speaking">
            <p class="text-sm md:text-lg">
                I write for php[architect], one of the biggest PHP magazines, and speak about PHP, APIs, and software development.
            </p>
            <div class="mb-10 grid grid-flow-row gap-4 md:grid-cols-2">
                <div class="mt-5 rounded-md bg-blue-500 px-5 py-8 text-white">
                    <div class="flex items-start justify-between gap-4">
                        <span class="text-sm uppercase tracking-wider opacity-80">Writing</span>
                        <a
                            :href="phpArchitectProfile"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View Nelson Isioma on php architect"
                        >
                            <Redirect class="transition-transform hover:-translate-y-1 hover:translate-x-1" />
                        </a>
                    </div>
                    <h3 class="mt-6 text-2xl font-bold leading-tight">php[architect]</h3>
                    <p class="mt-4 font-thin">
                        I write technical articles for php[architect] magazine subscribers, covering practical PHP topics like serverless apps, tracing, Laravel tooling, and HTMX.
                    </p>
                    <a
                        :href="phpArchitectProfile"
                        class="mt-6 inline-block rounded-md border px-3 py-2 text-sm transition-colors hover:bg-white hover:text-blue-500"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View articles
                    </a>
                </div>
                <div class="mt-5 rounded-md bg-blue-500 px-5 py-8 text-white">
                    <span class="text-sm uppercase tracking-wider opacity-80">Interview</span>
                    <h3 class="mt-6 text-2xl font-bold leading-tight">Serverless Architectures with Nelson Isioma</h3>
                    <div class="mt-4 aspect-video overflow-hidden rounded-md bg-black">
                        <iframe
                            class="h-full w-full"
                            :src="phpArchitectInterview"
                            title="Serverless Architectures with Nelson Isioma"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
            <div class="mb-10 rounded-md border-2 border-blue-500 px-5 py-8">
                <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <span class="text-sm uppercase tracking-wider opacity-70">Speaking</span>
                        <h3 class="mt-3 text-2xl font-bold leading-tight">Caching Strategies for High Traffic APIs</h3>
                        <p class="mt-3 text-sm md:text-base">
                            A conference talk for Apidays Lagos on designing caching strategies for APIs under heavy traffic.
                        </p>
                    </div>
                    <a
                        :href="apiDaysTalk"
                        class="inline-flex w-fit items-center gap-3 rounded-md bg-blue-500 px-4 py-3 text-white transition-transform hover:scale-105 hover:duration-500 ease-in-out"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View talk
                        <Redirect />
                    </a>
                </div>
            </div>
        </div>
        <span class="opacity-50 text-3xl">}</span>
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
