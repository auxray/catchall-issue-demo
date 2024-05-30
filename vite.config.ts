import vue from '@vitejs/plugin-vue'
import vike from 'vike/plugin'
const __dirname = import.meta.dirname;
import { UserConfig } from 'vite'

const config: UserConfig = {
  resolve: {
    alias: {
      "#root": __dirname,
    }
  },
  plugins: [
    vue(),
    vike(),
  ]
}

export default config;
