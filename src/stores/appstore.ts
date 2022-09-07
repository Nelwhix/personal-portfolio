import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('appstore', () => {
    const menuMode = ref(false)

    return { menuMode }
})