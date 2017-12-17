import React from 'react'
import './Person.css'

const person = (props) => {

    return (
        <div className='Person' >
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
