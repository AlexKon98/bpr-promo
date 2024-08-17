// https://nuxt.com/docs/api/configuration/nuxt-config
import playlists from './helpers/playlistsPages.js';

export default defineNuxtConfig({
  devtools: { enabled: true },
  router: {
    options: {
      hashMode: false,
    },
  },
  nitro: {
    output: {
      publicDir: 'dist',
    },
    prerender: {
      routes: [
        ...Object.keys(playlists).map((el) => `/playlists/${el}`),
      ],
    },
  },
  app: {
    baseURL: '/promo/blackpearlresort/'
  },
  modules: [
      [
        'yandex-metrika-module-nuxt3',
        {
          id: 96598334,
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        }
      ]
  ]
})
