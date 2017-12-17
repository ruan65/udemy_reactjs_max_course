import React from 'react'
import classes from './Person.css'

const person = (props) => {

    return (
        <div className={classes.Person} >
            <p onClick={props.click} >Hi There {props.name} you are {props.age}</p>
            <input
                type='text'
                onChange={props.changed}
                defaultValue={props.name}
            />
        </div>
    )
}

export default person
