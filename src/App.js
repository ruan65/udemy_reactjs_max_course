import React, { Component } from 'react'
import './App.css'

import Person from './Person/Person'
import Boss from './Person/Boss'

class App extends Component {

    state = {
        persons: [
            {name: 'Zina', age: 34},
            {name: 'Zinaida', age: 33},
            {name: 'Zinatulla', age: 32},
            {name: 'Zinacrone', age: 31}
        ]
    }

    switchNameHandler = () => {

        // console.log("Clicked.......")

        this.setState({persons: [
                {name: 'Grisha', age: 34},
                {name: 'Zinaida', age: 33},
                {name: 'Zinatulla', age: 32},
                {name: 'Zinacrone', age: 3177}
            ] })
    }

    render() {
        return (
            <div className="App">

                <h1>Hi, I'm a React App</h1>

                <button onClick={this.switchNameHandler}>Switch name</button>

                <Boss power='strong enough' age='250'>Behold!!!</Boss>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>

            </div>
        )
        // return React.createElement('div', {className: 'App'},
        //     React.createElement('h1', null, 'Hi, I\'m Andreyka!!!'))
    }
}

export default App
