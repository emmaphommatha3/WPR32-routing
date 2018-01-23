import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Photographers from './components/Photographers/Photographers.js';
import Details from './components/Photographers/Details/Details.js';
import Nope from './components/Nope.js';

// A way to clean up your App.js file is to put your Routes in a separate file like so. You are only default exporting parentheses with the Routes inside.

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/photographers/:id' component={Details}/>
    <Route path='/photographers' component={Photographers} />
    <Route component={Nope}/>
  </Switch>
)

// Things to remember:

// * Route can take two props: path and component. It will load the component it is given when the URL matches it's path.

// * Switch makes it so only one Route will load at a time. It will load the first one that matches and ignore the rest. So make sure to pay attention to order. The more detailed paths should go above the more general paths.

// * To use params, make sure you indicate that in the Route's path by using a colon.