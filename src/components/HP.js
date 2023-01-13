import React from 'react'

const HP = (props) => {
  return (
   <p className='hp'>
    <span>HP </span>
    {props.HP}
   </p>
  )
}

export default HP