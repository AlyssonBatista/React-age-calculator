import React from 'react'
import Input from './Input'

const Card = () => {
  return (
    <div>
     <Input place='DD' label='DAY'/>
     <Input place='MM' label='MONTH'/>
     <Input place='YYYY' label='YEAR'/>
    </div>
  )
}

export default Card
