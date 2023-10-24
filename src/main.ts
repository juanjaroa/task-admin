import './assets/main.css'
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


import { aliases, mdi } from "vuetify/lib/iconsets/mdi"
import "@mdi/font/css/materialdesignicons.css"


const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    /* themes: {
      myCustomLightTheme,
      light,
      dark
    }, */
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi
    },
  },
  components,
  directives,
})



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
