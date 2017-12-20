import React, {Component} from 'react'
import classes from './App.css'

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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
      showPersons: false,
      toggleClicked: 0
    }
  }

  togglePersonsHandler = () => {


    // this.setState({showPersons: !this.state.showPersons})

    this.setState((prevState, props) => {
      return {
        showPersons: !prevState.showPersons,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
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

    const persons = [...this.state.persons]

    persons.splice(index, 1)
    this.setState({persons: persons})

  }

  render() {

    let personsList = null

    if (this.state.showPersons) {

      personsList = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}/>
    }

    return (
      <div className={classes.App}>

        <Cockpit
          count={this.state.toggleClicked}
          title={this.props.title}
          state={this.state}
          clicked={this.togglePersonsHandler} />

        {personsList}

      </div>
    )
  }
}

export default App
