import React from 'react'

const person = (props) => {

    return (
        <div>
            <p>Hi There {props.name} you are {props.age}</p>
            <h3 onClick={props.click}>{props.children}</h3>
        </div>

    )
}

export default person
