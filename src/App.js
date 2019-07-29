import React, { Component } from 'react';
import Nav from './Nav.js'
import NewsContainer from './NewsContainer.js'
import TwitterContainer from './TwitterContainer.js'
import Footer from './Footer.js'
import CivicInfo from './CivicInfo.js'

class App extends Component {

  constructor() {
    super()

    this.state = {
      user: {},
      postalCode: 20902
    }
  }


  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <div className="row">
          <div className="col-sm-8">
            THIS IS WHERE OUR GRAPHS WILL GO
          </div>
          <div className="col-sm-4">
            <NewsContainer />
            <TwitterContainer />
          </div>
        </div>
        <CivicInfo postalCode={this.state.postalCode} />
        <Footer />
      </div>
    )
  }


}

export default App;
