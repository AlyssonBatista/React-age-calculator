import React from 'react'
import './Input.css'

const Input = (props) => {
  return (
    <div className='entrada-usuario'>
       <div className='input-label'>
        <label className={props.classe} htmlFor={props.id}>{props.label}</label>
        <input id={props.id} type='text' maxLength={props.tam}   placeholder={props.place} onBlur={props.onBlur}onChange={props.estado}   required  />
      </div>
    </div>
  )
}

export default Input
 