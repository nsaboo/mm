import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Careers from '../components/Careers';
import Products from '../components/Products';
import Contacts from '../components/Contacts';


const NotFound = () => (
  <div>
    <h1>Page not found.</h1>
  </div>
);


const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/careers" component={Careers} />
      <Route path="/contacts" component={Contacts} />
      <Route path="*" component={NotFound} />
    </Switch>
  </main>
);


export default Routes;
