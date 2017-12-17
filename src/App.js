import React, { Component } from 'react'
import './App.css'

import Person from './Person/Person'
import Boss from './Person/Boss'

const persons = {
  persons: [
    {id: 'wsdwdewd1', name: 'Zina', age: 34},
    {id: 'sdcsdcsd2', name: 'Zinaida', age: 33},
    {id: 'dscdscs3', name: 'Zinatulla', age: 32},
    {id: 'vfvedd4', name: 'Zinacrone', age: 31}
  ],
  showPersons: false
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = persons
  }

  togglePersonsHandler = (event) => {

    persons.showPersons = !persons.showPersons

    this.setState(persons)
  }


  nameChangeHandler = (event, id) => {

    persons.persons.map(pr => {

      if (pr.id === id) {

        pr.name = event.target.value
      }
      return pr
    })

    this.setState(persons)
  }

  deletePersonHandler = (index) => {

    persons.persons.splice(index, 1)
    this.setState(persons)

  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if (this.state.showPersons) {
      
      style.backgroundColor = 'red'

      persons = <div>{

        this.state.persons.map((p, index) =>

          <Person
            key={p.id}
            name={p.name} age={p.age}
            changed={(event) => this.nameChangeHandler(event, p.id)}
            click={() => this.deletePersonHandler(index)}
          />
        )

      }</div>
    }
    
    let classes = []
    let pInfo = 'Enough persons or not???'
    
    let count = this.state.persons.length
    
    if (count < 3) {
      
      classes.push('red')
    }
    
    if (count < 2) {
      classes.push('bold')
    }
    
    if (count < 1) {
      classes.push('blink')
      pInfo = 'There is no Persons anymore!!!!!!!!!!'
    }
    

    return (
      <div className="App">

        <h1>Hi, I'm a React App</h1>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Show Persons
        </button>
        
        <p className={classes.join(' ')} >{ pInfo }</p>

        <Boss power='strong enough' age='250'>Behold!!!</Boss>

        {persons}

      </div>
    )
  }
}

export default App
