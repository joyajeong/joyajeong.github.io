import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import UniqloPage from './UniqloPage';
import NutriPage from './NutriPage';

const Main = () => (
  <main>
    <Switch>
      <Route path="/contact" component={Contact} />
      <Route path='/uniqlo' component={UniqloPage}/>
      <Route path='/nutri' component={NutriPage}/>
      <Route exact path="/" component={Home} />
    </Switch>
  </main>
)

export default Main
