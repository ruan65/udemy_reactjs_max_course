import React from 'react'
import './Person.css'
import Radium from 'radium'

const person = (props) => {
  
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    },
    color: 'sienna'
  }

    return (
        <div className='Person' style={style} >
            <p onClick={props.click} >Hi There {props.name} you are {props.age}</p>
            <input
                type='text'
                onChange={props.changed}
                defaultValue={props.name}
            />
        </div>
    )
}

export default Radium(person)
