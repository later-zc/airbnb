import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'

// import App from './App';
import App from '@/App'
import 'normalize.css'
import '@/assets/css/index.less'
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <HashRouter>
      <Suspense fallback="loading">
        <Provider store={store}>
          <App/>
        </Provider>
      </Suspense>
    </HashRouter>
  // </React.StrictMode>
);
