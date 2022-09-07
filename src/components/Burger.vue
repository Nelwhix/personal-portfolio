<script setup lang="ts">
    import { useAppStore } from '@/stores/appstore';

    const appstore = useAppStore()
    const chMod = () => {
        appstore.navMode = !appstore.navMode
        appstore.menuMode = !appstore.menuMode
    }
    
</script>

<template>
    <button @click="chMod" class="h-10" :class="{'change': appstore.navMode }">
        <div class="bar1 rounded-md"></div>
        <div class="bar2 rounded-md"></div>
        <div class="bar3 rounded-md"></div>
    </button>
</template>

<style scoped>
    .bar1, .bar2{
        width: 40px;
        height: 4px;
        background-color: black;
        margin: 4px 0;
        transition: 0.4s;
    }

    .bar3 {
        width: 25px;
        margin-top: 4px;
        margin-left: 15px;
        background-color:#256EFF;
        height: 4px;
        transition: 0.4s;
    }

    .change .bar1 {
        transform: translate(0, 8px) rotate(-45deg);
        background-color: white;
    }

    .change .bar2 {
        opacity: 0;
    }

    .change .bar3 {
        transform: translate(0, -8px) rotate(45deg);
        width: 40px;
        margin-left: 0;
        background-color: white;
    }
</style>