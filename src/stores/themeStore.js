import { defineStore } from 'pinia'
import { useTheme } from 'vuetify';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    
    isDarkMode: useTheme().global.current.value.dark,
  }),
  actions: {
    
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('theme_name', this.isDarkMode ? 'dark' : 'light');
      console.log(this.theme.global.name)
      this.theme.global.name.value === this.isDarkMode ? 'dark' : 'light';
      
    },
  },
})
