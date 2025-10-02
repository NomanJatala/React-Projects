import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            animation: {
              "gradient-x": "gradient-x 8s ease infinite",
            },
            keyframes: {
              "gradient-x": {
                "0%, 100%": {
                  "background-size": "200% 200%",
                  "background-position": "left center",
                },
                "50%": {
                  "background-size": "200% 200%",
                  "background-position": "right center",
                },
              },
            },
          },
        },
      },
    }),
  ],
})
