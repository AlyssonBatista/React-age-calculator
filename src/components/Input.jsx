import React from 'react'

const Input = (props) => {
  return (
    <div>
       <div>
        <label htmlFor="">{props.label}</label>
        <input type="text" placeholder={props.place} />
      </div>
    </div>
  )
}

export default Input
 