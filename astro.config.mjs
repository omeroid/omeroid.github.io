// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.omeroid.com',
  trailingSlash: 'always',
  build: {
    // 出力を /path/index.html にして GitHub Pages で拡張子なし URL を扱えるようにする
    format: 'directory',
  },
  // 旧サイト（Gatsby版）のURLからの転送。静的な meta refresh が生成される
  redirects: {
    '/service/': '/',
    '/service/it/': '/it/',
    '/service/consulting/': '/consulting/',
    '/service/product/': '/product/',
    '/member/matsuno/': '/company/',
    '/blogs/': '/',
    '/privacyPolicy/':
      'https://omeroid.notion.site/e6608dcc19e3414aa7458e0a6bf00145?pvs=4',
  },
  devToolbar: { enabled: false },
})
