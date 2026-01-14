import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt="Profile Image" className="card-image"/>

        <div className="card-content">
            <h2 className="card-name">{props.name}</h2>
            <p className="card-age">Age: {props.age}</p>
            <p className="card-description">
                John is a software developer with a strong interest in web technologies
                and user interface design.
            </p>
        </div>
    </div>
  )
}

export default Card
