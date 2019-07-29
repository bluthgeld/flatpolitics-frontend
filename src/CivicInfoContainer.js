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
    fetch("https://www.googleapis.com/civicinfo/v2/representatives?address=20902&includeOffices=true&levels=country&levels=regional&levels=locality&key=AIzaSyCVzfByi-RjV-MHC_xMXztyvelmIjB9RMA")
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
        <div class="col-sm-2">
          <CivicsCard />
        </div>
      </div>
    )
  }

}

export default CivicInfoContainer

// while(x <= l) {
//     if (x === 3){
//       pol.title = data.offices[2].name
//       pol.name = data.officials[x].name
//       pol.party = data.officials[x].party
//       pol.phone = data.officials[x].phones
//       pol.url = data.officials[x].urls[0]
//       civicsdata.push(pol)
//       x += 1
//     }else{
//       pol.title = data.offices[x].name
//       pol.name = data.officials[x].name
//       pol.party = data.officials[x].party
//       pol.phone = data.officials[x].phones
//       pol.url = data.officials[x].urls[0]
//       civicsdata.push(pol)
//       x += 1
//     }
//   }
