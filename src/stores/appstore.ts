import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('appstore', () => {
    const menuMode = ref(true)
    const navMode = ref(false)

    return { menuMode, navMode }
})