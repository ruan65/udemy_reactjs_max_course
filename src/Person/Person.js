import React from 'react'
import classes from './Person.css'



const person = (props) => {
  
  const rnd = Math.random()
  
  if (rnd > .75) {
    throw new Error('Something went wrong: ' + rnd)
  }
  
  return (
    <div className={classes.Person}>
      
      <p onClick={props.click}>Hi There {props.name} you are {props.age}</p>
      <input
        type='text'
        onChange={props.changed}
        defaultValue={props.name}
      />
    </div>
  )
}

export default person
