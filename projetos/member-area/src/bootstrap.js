import React from 'react';
import ReactDOM from 'react-dom';
import MemberArea from './components/MemberArea';

const mount = (el) => {
  ReactDOM.render(<MemberArea />, el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_member-area-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
