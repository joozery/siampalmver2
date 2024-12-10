import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-redirects',
      writeBundle() {
        // คัดลอกไฟล์ _redirects ไปที่โฟลเดอร์ dist หลัง build
        copyFileSync('_redirects', 'dist/_redirects');
      },
    },
  ],
  base: '/', // ใช้ '/' สำหรับ Netlify หรือปรับเป็น subpath ถ้าใช้ path อื่น
  build: {
    outDir: 'dist', // ระบุโฟลเดอร์ output สำหรับ build
  },
});
