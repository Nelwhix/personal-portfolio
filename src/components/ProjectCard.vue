<script setup lang="ts">
import Redirect from "../assets/icons/redirect.vue";
import Folder from "../assets/icons/folder.vue";
import Github from "../assets/icons/github.vue";

defineProps(['portfolio'])


</script>

<template>
    <div class="py-8 px-5 rounded-md bg-blue-500 text-white font-bold mt-5 md:w-[30vw]">
        <div class="flex justify-between">
            <Folder />
            <div class="flex gap-3">
                <a :href="portfolio.githubLink" target="_blank"><Github class="h-6" /></a>
                <a :href="portfolio.projectLink" target="_blank"> <Redirect /></a>
            </div>
        </div>
        <h2 class="mt-6 text-2xl">{{ portfolio.name }}</h2>
        <p class="font-thin mt-4">{{ portfolio.description }}</p>
        <div class="flex flex-wrap gap-2 text-sm mt-2">
            <span class="border py-1 px-2 rounded-md" v-for="(tool, i) in portfolio.tools" :key="i">{{ tool }}</span>
        </div>
    </div>
</template>