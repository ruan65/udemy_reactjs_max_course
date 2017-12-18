import React, {Component} from 'react'
import classes from './App.css'

import Persons from '../components/Persons/Persons'
import Boss from '../components/Persons/Person/Boss'

class App extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      persons: [
        {id: 'wsdwdewd1', name: 'Zina', age: 34},
        {id: 'sdcsdcsd2', name: 'Zinaida', age: 33},
        {id: 'dscdscs3', name: 'Zinatulla', age: 32},
        {id: 'vfvedd4', name: 'Zinacrone', age: 31}
      ],
      showPersons: false
    }
  }
  
  togglePersonsHandler = (event) => {
    
    this.setState({showPersons: !this.state.showPersons})
  }
  
  nameChangeHandler = (event, id) => {
    
    const persons = this.state.persons

    persons.map(pr => {

      if (pr.id === id) {

        pr.name = event.target.value
      }
      return pr
    })

    this.setState(persons)
  }
  
  deletePersonHandler = (index) => {
    
    const persons = this.state.persons

    persons.splice(index, 1)
    this.setState(persons)

  }
  
  render() {
    
    let personsList = null
    
    var buttonClass = null
    
    if (this.state.showPersons) {
      
      buttonClass = classes.Red
      
      console.log("persons: " + this.state.persons)
      personsList = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}/>
    }
    
    let assignedClasses = []
    let pInfo = 'Enough persons or not???'
    
    let count = this.state.persons.length
    
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
    
    return (
      <div className={classes.App}>
        
        <h1>Hi, I'm a React App</h1>
        
        <button className={buttonClass}
                onClick={this.togglePersonsHandler}>
          Show Persons
        </button>
        
        <p className={assignedClasses.join(' ')}>{pInfo}</p>
        
        <Boss power='strong enough' age='250'>Behold!!!</Boss>
        
        {personsList}
      
      </div>
    )
  }
}

export default App
