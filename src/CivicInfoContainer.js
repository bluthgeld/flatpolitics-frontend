import React, { Component } from 'react'
import CivicsCard from './CivicsCard.js'

class CivicInfoContainer extends Component {



  constructor() {
    super()

    this.state = {
      civicsdata: []
    }

  }



  componentDidMount() {
    fetch(`https://www.googleapis.com/civicinfo/v2/representatives?address=20855&includeOffices=true&levels=country&levels=regional&levels=locality&key=${process.env.REACT_APP_GOOGLE_CIVIC_API}`)
      .then(resp => resp.json())
      .then(data => this.cardData(data))
  }

  cardData = (data) =>  {
    let x = 0
    let l = data.officials.length - 1
    let civicsdata = []
    while(x <= l) {
      let pol = {}
      if (x >= 3) {
        pol.title = data.offices[x - 1].name
        pol.name = data.officials[x].name
        pol.party = data.officials[x].party
        pol.phone = data.officials[x].phones[0]
        pol.url = data.officials[x].urls[0]
        civicsdata.push(pol)
        x = x + 1
      } else {
        pol.title = data.offices[x].name
        pol.name = data.officials[x].name
        pol.party = data.officials[x].party
        pol.phone = data.officials[x].phones[0]
        pol.url = data.officials[x].urls[0]
        civicsdata.push(pol)
        x = x + 1
      }
    }
    this.setState( {civicsdata: civicsdata})
  }

  render() {
    return (
      <div class="row">
          {this.state.civicsdata.map(polObj => <CivicsCard
            polObj={polObj}
            key={polObj.name}
            />)}
      </div>
    )
  }
}

export default CivicInfoContainer
