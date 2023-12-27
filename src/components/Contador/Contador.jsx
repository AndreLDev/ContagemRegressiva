import React from 'react'
import '../Contador/Style.css'

export const Contador = ({title, number}) => {
  return (
    <div className='coumter'>
        <p className='counter-number'>{number}</p>
        <h3 className='counter-text'>{title}</h3>
    </div>
  )
}


export default Contador