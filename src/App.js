import React, {Component} from 'react'
import './App.css'

import Person from './Person/Person'
import Boss from './Person/Boss'

const persons = {
  persons: [
    {name: 'Zina', age: 34},
    {name: 'Zinaida', age: 33},
    {name: 'Zinatulla', age: 32},
    {name: 'Zinacrone', age: 31}
  ],
  showPersons: false
}

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = persons
  }
  
  togglePersonsHandler = (event) => {
  
    console.log("show persons clicked......")
    
    persons.showPersons = !persons.showPersons
    
    this.setState(persons)
  }
  
  
  nameChangeHandler = (event) => {
    
    persons.persons[3].name = event.target.value
    
    this.setState(persons)
  }
  
  render() {
    
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    
    let persons = null
    
    if (this.state.showPersons) {

      persons = <div>{
        
          this.state.persons.map((p, index) =>

            <Person
              key={index.toString()}
              name={p.name} age={p.age}
              changed={this.nameChangeHandler}
            />
          )
        
        }</div>
    }
    
    return (
      <div className="App">
        
        <h1>Hi, I'm a React App</h1>
        
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Show Persons
        </button>
        
        <Boss power='strong enough' age='250'>Behold!!!</Boss>
        
        { persons }
        
      </div>
    )
  }
}

export default App
