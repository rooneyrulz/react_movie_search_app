import React from 'react';
import ReactDOM from 'react-dom';

// Contexts
import MovieProvider from './providers/MovieProvider';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById('movie_search_app')
);
