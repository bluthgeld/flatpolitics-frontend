import React, { Component } from 'react';
import Nav from './Nav.js'
import NewsContainer from './NewsContainer.js'
import TwitterContainer from './TwitterContainer.js'
import Footer from './Footer.js'
import CivicInfo from './CivicInfo.js'
import PollContainer from './PollContainer.js'



class App extends Component {

  constructor() {
    super()

    this.state = {
      user: {},
      postalCode: 20902,
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
            <PollContainer
             allPolls={this.state.allPolls}

             />
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
