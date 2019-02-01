import React from 'react';
import '../App.css';
import Button from './button'

const Card = (props) => {
  console.log(props)
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.artist}</h5>
        <p className="card-text">{props.time} {props.opener} {props.closer} {props.day}</p>
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