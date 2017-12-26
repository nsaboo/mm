import React from 'react';
import { Switch, Route } from 'react-router-dom';


const Home = () => (
  <div>
    Home
  </div>
);


const Careers = () => (
  <div>
    Careers
  </div>
);


const Contacts = () => (
  <div>
    Contacts
  </div>
);


const About = () => (
  <div>
    About
  </div>
);

const NotFound = () => (
  <div>
    <h1>Page not found.</h1>
  </div>
);


const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/careers" component={Careers} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Switch>
  </main>
);


export default Routes;
