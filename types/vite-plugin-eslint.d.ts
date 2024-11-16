declare module 'vite-plugin-eslint' {
  import { Plugin } from 'vite';

  const vitePluginEslint: () => Plugin;
  export default vitePluginEslint;
}
