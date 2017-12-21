import React from 'react'
import Person from './Person/Person'

const persons = (props) => props.persons.map((p, index) => {
    
    return <Person
      key={p.id}
      pos={index}
      name={p.name} age={p.age}
      changed={(event) => props.changed(event, p.id)}
      click={() => props.clicked(index)}
    />
  }
)

export default persons