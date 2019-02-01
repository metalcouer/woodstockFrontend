import React from 'react';
import '../App.css';

const Button = (props) => {
  return (
    <button type="button" className="btn btn-secondary mr-2">{props.tags}</button>
  )
}

export default Button