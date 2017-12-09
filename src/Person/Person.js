import React from 'react'
import './Person.css'

const person = (props) => {

    return (
        <div className='Person'>
            <p>Hi There {props.name} you are {props.age}</p>
            <h3 onClick={props.click}>{props.children}</h3>
            <input
                type='text'
                onChange={props.changed}
                defaultValue={props.name}
            />
        </div>
    )
}

export default person
