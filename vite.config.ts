import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 项目站点的地址是 https://<user>.github.io/my_first_web/，
// 资源必须挂在 /my_first_web/ 子路径下；本地 dev 用根路径更顺手。
// 需要别的部署路径时用 VITE_BASE 环境变量覆盖，例如 VITE_BASE=/ npm run build
const DEPLOY_BASE = process.env.VITE_BASE

export default defineConfig(({ command }) => ({
  base: DEPLOY_BASE ?? (command === 'build' ? '/my_first_web/' : '/'),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
}))
