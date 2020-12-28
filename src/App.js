import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Clinics from './pages/Clinics';
import Add from './pages/Add';
import GlobalStyles from './styles/global';

const App = () => (
  <Router>
    <GlobalStyles />
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/clinics' component={Clinics} />
      <Route exact path='/addclinic' component={Add} />

    </Switch>
  </Router>
);

export default App;
