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

    switchNameHandler = (newName) => {

        // console.log("Clicked.......")

        this.setState({persons: [
                {name: newName, age: 34},
                {name: 'Zinaida', age: 33},
                {name: 'Zinatulla', age: 32},
                {name: 'Zinacrone', age: 3177}
            ] })
    }


    nameChangeHandler = (event) => {

        // this.setState({persons: [
        //         {name: 'Catarina', age: 34},
        //         {name: 'Zinaida', age: 33},
        //         {name: 'Zinatulla', age: 32},
        //         {name: event.target.value, age: 55}
        //     ] })

        this.state.persons[3].name = event.target.value

        this.setState(this.state)
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        return (
            <div className="App">

                <h1>Hi, I'm a React App</h1>

                <button
                    style={style}
                    onClick={() => { return this.switchNameHandler("Drago")}}>Switch name</button>

                <Boss power='strong enough' age='250'>Behold!!!</Boss>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, "Leticia")}
                >
                    See Who I am
                </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                <Person
                    name={this.state.persons[3].name}
                    age={this.state.persons[3].age}
                    changed={this.nameChangeHandler}
                />

            </div>
        )
        // return React.createElement('div', {className: 'App'},
        //     React.createElement('h1', null, 'Hi, I\'m Andreyka!!!'))
    }
}

export default App
