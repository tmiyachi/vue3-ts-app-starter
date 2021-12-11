import { createApp } from 'vue';

import App from '@/App.vue';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div');
  document.body.appendChild(el);
  createApp(App).mount(el);
});
