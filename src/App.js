import React from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './compontents/Home';
import About from './compontents/About';
import Portfolio from './compontents/Portfolio';
import Contact from './compontents/Contact';
import Navbar from './compontents/Navbar';
import Footer from './compontents/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/About' component={About}></Route>
        <Route exact path='/Portfolio' component={Portfolio}></Route>
        <Route exact path='/Contact' component={Contact}></Route>
      </Switch>
      <Footer/>
    </div>
  );
}
export default App;
