import React from 'react';
import '../App.css';
import Button from './button'

const Card = (props) => {
  console.log(props)
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.description}</h5>
        <p className="card-text">{props.example}</p>
        {props.tags.map((tag, idx) => {
          return <Button 
            key={idx}
            tag={tag}/>
        })}
      </div>
    </div>
  )
}

export default Card;