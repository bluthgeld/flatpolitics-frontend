import React from 'react'

const CivicsCard = () => {
  return (
    <div className="card mb-3">
      <h3 className="card-header">Card header</h3>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <h6 className="card-subtitle text-muted">Support card subtitle</h6>
      </div>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">Twitter</a>
        <a href="#" className="card-link">Facebook</a>
        <a href="#" className="card-link">Web</a>
      </div>
    </div>

  )
}

export default CivicsCard
