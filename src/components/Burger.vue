<script setup lang="ts">
    import { ref } from 'vue';

    const navMode = ref(false)
    const chMod = () => (navMode.value = !navMode.value)
</script>

<template>
    <button @click="chMod" class="h-10" :class="{'change': navMode}">
        <div class="bar1 rounded-md"></div>
        <div class="bar2 rounded-md"></div>
        <div style="width: 25px; margin-left:15px; background-color:#256EFF;" class="bar3 rounded-md"></div>
    </button>
</template>

<style scoped>
    .bar1, .bar2, .bar3 {
        width: 40px;
        height: 4px;
        background-color: black;
        margin: 4px 0;
    }

    .change .bar1 {
        transform: translate(0, 11px) rotate(-45deg);
        background-color: white;
    }

    .change .bar2 {
        opacity: 0;
    }

    .change .bar3 {
        transform: translate(0, -11px) rotate(45deg);
        background-color: white;
    }
</style>