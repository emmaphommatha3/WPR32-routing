import React, { Component } from 'react';
import data from './data'
import { Link } from 'react-router-dom';

export default class Photographers extends Component {
  constructor() {
    super()
    this.state = {
      photographers: data
    }
  }

  render() {

    // Below we are adding Link tags to each element in the state photographers array. We are customizing the link so that it has the correct id for the name that you click on. The 'to' prop in the Link component must have the full value of the url path, you can't add a colon like you do in the Route component path prop. 

    const photographers = this.state.photographers.map((e, i) => {
      return (
        <Link key={i} to={'/photographers/' + e.id}>
          <h3>{e.name}</h3>
        </Link>
        
      )
    })

    return (
      <div>
        <h1>This is the PHOTOGRAPHERS component!</h1>
        { photographers }
      </div>
    )
  }

}