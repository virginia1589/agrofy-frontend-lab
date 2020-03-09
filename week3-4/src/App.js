import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';

const Home = lazy(() => import('./pages/Home/Home'));
const Pokedex = lazy(() => import('./pages/Pokedex/Pokedex'));
const Fav =lazy(() => import('./pages/Fav/Fav'));

const App = () => (
  <React.Fragment>
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/pokedex" component={Pokedex}/>
          <Route exact path="/Fav" component={Fav}></Route>
        </Switch>
      </Suspense>
    </Router>
  </React.Fragment>
);

export default App;
