import React from 'react';
import '../App.css';
import Button from './button'

const Card = (props) => {
  console.log(props)
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.artist}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.time}</h6>
        <h6 className="card-subtitle mb-2 text-muted">{props.day}</h6>
        <p className="card-text">{props.opener}</p>
        <p className="card-text">{props.closer} </p>
        
        {props.day.map((tag, idx) => {
          return <Button 
            key={idx}
            tag={tag}/>
        })}
      </div>
    </div>
  )
}

export default Card;