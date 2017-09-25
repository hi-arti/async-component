import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function renderPage(AppComponent, cb = () => {}) {
  ReactDOM.render(<AppComponent />, document.getElementById('root'));
  cb();
}

renderPage(App, () => console.log('Init Render success'));

if (module.hot) {
  module.hot.accept('./App', () => {
    const comp = require('./App').default;
    renderPage(comp, () => console.log('HOT Render success'));
  });
}
registerServiceWorker();
