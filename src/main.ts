import './assets/main.scss'
/* import {myCustomLightTheme} from './glass.js' */

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#358663',
          secondary: '#337AB7',
          success: '#229676',
          error: '#FF5B5B',
          'on-surface': '#393d40',
          'on-surface-variant': '#525252',
          'onsurface-v': '#525252'
        }
      },
      dark: {
        colors: {
          primary: '#358663',
          secondary: '#337AB7',
          success: '#229676',
          error: '#FF5B5B',
          'on-surface': '#FFFFFF',
          'on-surface-variant': '#b0b0b0',
          'onsurface-v': '#b0b0b0'
        }
      }
    }
  },
  display: {
    mobileBreakpoint: 'md',
    
  },
  components,
  directives
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
