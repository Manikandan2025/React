import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
    <p>playername:{props.name}</p>
    <p>player number:{props.number}</p>  
    </div>
  )
}

export default Card
