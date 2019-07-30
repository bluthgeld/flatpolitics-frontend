import React from 'react'

const CivicsCard = (props) => {
  return (
   <div class="col-sm-2">
    <div className="card mb-3">
      <h3 className="card-header">{props.polObj.title}</h3>
      <div className="card-body">
        <h5 className="card-title">{props.polObj.name}</h5>
        <h6 className="card-subtitle text-muted">{props.polObj.party}</h6>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Phone: {props.polObj.phone}</li>
      </ul>
      <div className="card-body">
        <a href={props.polObj.url} className="card-link">Web</a>
      </div>
    </div>
   </div>
  )
}

export default CivicsCard
