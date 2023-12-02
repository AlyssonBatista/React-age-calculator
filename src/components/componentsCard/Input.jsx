import React from 'react'

const Input = (props) => {
  return (
    <div>
       <div>
        <label htmlFor="">{props.label}</label>
        <input value={props.states} type="text" placeholder={props.place} onChange={props.estado}  />
      </div>
    </div>
  )
}

export default Input
 