import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 배포를 위해 저장소 이름으로 설정합니다.
  base: '/<your-repo-name>/',
})
