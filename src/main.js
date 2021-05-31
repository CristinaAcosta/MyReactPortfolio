import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './compontents/Main';
import About from './compontents/About';
import Portfolio from './compontents/Portfolio';
import Contact from './compontents/Contact';

const Main = () => {
    return (
      <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/About' component={About}></Route>
        <Route exact path='/Portfolio' component={Portfolio}></Route>
        <Route exact path='/Contact' component={Contact}></Route>
      </Switch>
    );
  }
  
  export default Main;