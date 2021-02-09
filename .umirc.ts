import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'MLModelCI',
  favicon: 'https://i.loli.net/2021/02/04/hJKY1ONBEtIUM3c.png',
  logo: 'https://i.loli.net/2021/02/04/hJKY1ONBEtIUM3c.png',
  outputPath: 'dist',
  mode: 'site',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  polyfill: false,
  styles: ['./app.less'],
  navs: {
    'en-US': [
      null,
      { title: 'GitHub', path: 'https://github.com/cap-ntu/ML-Model-CI' },
    ],
    'zh-CN': [
      null,
      { title: 'GitHub', path: 'https://github.com/cap-ntu/ML-Model-CI' },
    ],
  },
});
