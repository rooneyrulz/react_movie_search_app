import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppHeader from './layouts/AppHeader';
import Movie from './pages/Movie';
import About from './pages/About';

const App = () => (
  <BrowserRouter>
    <>
      <header className='app__header'>
        <AppHeader />
      </header>
      <div className='app__main'>
        <Switch>
          <Route exact path='/' component={Movie} />
          <Route exact path='/about-us' component={About} />
        </Switch>
      </div>
      <footer className='app__footer'></footer>
    </>
  </BrowserRouter>
);

export default App;
