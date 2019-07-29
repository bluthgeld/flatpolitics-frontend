import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js'
import NewsContainer from './NewsContainer.js'
import TwitterContainer from './TwitterContainer.js'

class App extends Component {

  constructor() {
    super()

    this.state = {
      postal_code: 20902
    }

  }


  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <Nav />
          </div>
        </div>

        <div class="row">
          <div class="col-sm-8">
            One of Two columns
          </div>
          <div class="col-sm-4">
            <NewsContainer />
            <TwitterContainer />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            Footer
          </div>
        </div>
      </div>

    )
  }

}

export default App;
