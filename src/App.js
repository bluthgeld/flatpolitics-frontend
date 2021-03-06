import React, { Component } from 'react';
import Nav from './Nav.js'
import NewsContainer from './NewsContainer.js'
import Footer from './Footer.js'
import About from './About.js'
import PollContainer from './PollContainer.js'
import CivicInfoContainer from './CivicInfoContainer.js'
import {Route} from 'react-router-dom'


class App extends Component {

  constructor() {
    super()

    this.state = {
      user: {},
      postalCode: 10576,
      allPolls: [],
      currentPoll: {}
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/polls')
    .then(res => res.json())
    .then(pollData => {

      this.setState({allPolls: pollData})

    })
  }

  render() {
    return (
      <div className="container-fluid">
        <Nav />
          <div className="row">
            <div className="col-sm-8">
              <Route exact path="/" render={() => { return <PollContainer
                 allPolls={this.state.allPolls}
                 />
             }} />
              <Route exact path="/about" component={About} />
            </div>
            <div className="col-sm-4">
              <NewsContainer />
            </div>
          </div>
          <CivicInfoContainer postalCode={this.state.postalCode} />
          <Footer />
      </div>
    )
  }


}

export default App;
