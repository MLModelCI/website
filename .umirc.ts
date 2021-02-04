import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'MLModelCI',
  favicon: 'https://i.loli.net/2021/02/04/hJKY1ONBEtIUM3c.png',
  logo: 'https://i.loli.net/2021/02/04/hJKY1ONBEtIUM3c.png',
  outputPath: 'docs-dist',
  mode: 'site',
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
