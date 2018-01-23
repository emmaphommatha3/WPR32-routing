import React from 'react';
import FAQ from './FAQ/FAQ'
import { Link, Route } from 'react-router-dom';

// Below is an example of using nested Routes. 

export default function About() {
  return (
    <div>
      <h1>This is the ABOUT component!</h1>
      <Link to='/about/faq'>FAQ</Link>
      <Route path='/about/faq' component={FAQ} />
    </div>
  )
}
