import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fontsPlugin from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Otros plugins...
    fontsPlugin()
  ]
});
