import React from 'react'

const Body = (props) => {
  return (
    <>
    <h2 className='name'>{props.name}</h2>
    <div className='types'>
        <span>{props.types.type1}</span>
        {props.types.type2 !== "" && <span>{props.types.type2}</span>}
    </div>
    <div className='stats'>
        <div>
            <h3>{props.stats.attack}</h3>
            <p>Attack</p>
        </div>
        <div>
            <h3>{props.stats.defense}</h3>
            <p>Defense</p>
        </div>
        <div>
            <h3>{props.stats.speed}</h3>
            <p>Speed</p>
        </div>
    </div>
    </>
  )
}

export default Body