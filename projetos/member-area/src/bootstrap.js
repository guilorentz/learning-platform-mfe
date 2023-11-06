import { createApp } from 'vue';
import MemberArea from './components/MemberArea';

const mount = (el) => {
  const app = createApp(MemberArea);
  app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_memberArea-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
