import React, { Component } from 'react'
import CivicsCard from './CivicsCard.js'

class CivicInfoContainer extends Component {

  constructor() {
    super()

    this.state = {
      civicsdata: {}
    }

  }

  componentDidMount() {
    fetch("https://www.googleapis.com/civicinfo/v2/representatives?address=20902&includeOffices=true&levels=country&levels=regional&levels=locality&key=AIzaSyCVzfByi-RjV-MHC_xMXztyvelmIjB9RMA")
      .then(resp => resp.json())
      .then(data => this.cardData(data))
  }

  cardData = (data) =>  {
    let x = 0
    let l = data.officials.length
    debugger

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

// while(x <= l - 1) {
//     if (x = 3){
//       x += 1
//     }else{
//       x += 1
//     }
// }
