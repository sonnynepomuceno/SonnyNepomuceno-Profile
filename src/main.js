import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#060608',
          surface:    '#0e0e14',
          primary:    '#c8f542',
          secondary:  '#7b61ff',
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')
