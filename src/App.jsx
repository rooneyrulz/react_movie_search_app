import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Contexts
import MovieContext from './context/MovieContext';

// Layouts | Components
import AppHeader from './layouts/AppHeader';
import Movie from './pages/Movie';
import About from './pages/About';

import { movies } from './movies';

const App = () => {
  const { loading, setLoading, setMovies } = React.useContext(MovieContext);

  React.useEffect(() => {
    setMovies(movies);
    setLoading(false);
  }, [loading]);

  return loading ? (
    <p> Loading... </p>
  ) : (
    <BrowserRouter>
      <>
        <header className='app__header'>
          <AppHeader />
        </header>{' '}
        <div className='app__main'>
          <Switch>
            <Route exact path='/' component={Movie} />{' '}
            <Route exact path='/about-us' component={About} />{' '}
          </Switch>{' '}
        </div>{' '}
        <footer className='app__footer'> </footer>{' '}
      </>{' '}
    </BrowserRouter>
  );
};

export default App;
