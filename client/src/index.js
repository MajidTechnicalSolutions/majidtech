import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import WebFont from 'webfontloader';
import App from './App';
import './index.css';
const container = document.getElementById('root');
const root = createRoot(container);

  WebFont.load({
    google: {
      families: ['Lato:300,400,700', 'Lobster:300,400,700', 'sans-serif', 'Modern Era Mono'],
    },
  });



root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
