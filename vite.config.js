import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
})
safelist: [
  "bg-[url('Images/blog-img.png')]",
  "bg-[url('Images/currency-img.png')]",
  "bg-[url('Images/watchPaglu.png')]",
  "bg-[url('Images/amazon-img.png')]"


  

]

