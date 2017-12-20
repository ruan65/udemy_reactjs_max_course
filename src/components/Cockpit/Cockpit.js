import React from 'react'
import Boss from '../Persons/Person/Boss'
import classes from '../../containers/App.css'
import Aux from '../hoc/Aux'

const cockpit = (props) => {

  var buttonClass = null

  if (props.state.showPersons) {

    buttonClass = classes.Red

  }

  let assignedClasses = []
  let pInfo = 'Enough persons or not???'

  let count = props.state.persons.length

  if (count < 3) {

    assignedClasses.push(classes.red)
  }

  if (count < 2) {
    assignedClasses.push(classes.bold)
  }

  if (count < 1) {
    assignedClasses.push(classes.blink)
    pInfo = 'There is no Persons anymore!!!!!!!!!!'
  }

  return <Aux>
    <h1>{props.title}</h1>

    <button className={buttonClass}
            onClick={props.clicked}>
      Show Persons
    </button>

    <p className={assignedClasses.join(' ')}>{pInfo}</p>

    <Boss power='strong enough' age='250'>Behold!!!</Boss>
  </Aux>
}

export default cockpit