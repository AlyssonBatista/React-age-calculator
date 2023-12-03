import React from 'react'
import './Input.css'

const Input = (props) => {
  return (
    <div>
       <div>
        <label htmlFor={props.id}>{props.label}</label>
        <input  value={props.states} id={props.id} type='number'  placeholder={props.place} onChange={props.estado} required  />
      </div>
    </div>
  )
}

export default Input
 