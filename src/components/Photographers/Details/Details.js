import React, { Component } from 'react';
import data from '../data.js';

// In order to load specific things (a specific user, a product, etc...) you can reference the URL params by using this.props.match.params.[URL PARAM PROPERTY NAME]. The property name will be whatever words you used after the colon in the Route component. This makes this component flexible so that you can load any of your needed data while only having one component.

export default class Details extends Component {
  constructor() {
    super()
    this.state = {
      photographer: {}
    }
  }

  componentDidMount() {
    // api request with this.props.match.params.id would go here
    let photographer = data.filter(e => {
      if(e.id === +this.props.match.params.id) {
        return e
      }
    })
    this.setState({
      photographer: photographer[0]
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.photographer.name}</h1>
        <p>{this.state.photographer.description}</p>
        <img src={this.state.photographer.image} />
      </div>
    )
  }


}