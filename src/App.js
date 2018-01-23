import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import routes from './routes';

// Link components allow you to "link" to the route you're wanting to load. Here we are only using the "to" prop. The "to" prop from the Link component and the "path" prop from the Route component must match for it to work.

// The routes are being rendered below. These are the Routes that are saved in the routes file.

class App extends Component {
  render() {
    return (
      <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/photographers'>Photographers</Link>
          { routes }
      </div>
    );
  }
}

export default App;
