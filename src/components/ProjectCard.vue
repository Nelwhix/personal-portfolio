<script setup lang="ts">
import Redirect from "../assets/icons/redirect.vue";
import Folder from "../assets/icons/folder.vue";

defineProps(['portfolio'])
</script>

<template>
    <div class="py-8 px-5 rounded-md bg-blue-500 text-white mt-5">
        <div class="flex justify-between">
            <a href="{{ portfolio.github-link}}"><Folder /></a>
            <a href="{{ portfolio.project-link }}"> <Redirect /></a>
        </div>
        <h2 class="mt-6 text-2xl">{{ portfolio.name }}</h2>
        <p class="font-thin mt-4">{{ portfolio.description }}</p>
        <span v-for="(tag, i) in portfolio.tags" :key="i">{{ tag }}</span>
    </div>
</template>