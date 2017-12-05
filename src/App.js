import React, { Component } from 'react'
import './App.css'

import Person from './Person/Person'
import Boss from './Person/Boss'

class App extends Component {
    render() {
        return (
            <div className="App">
               <h1>Hi, I'm a React App</h1>
                <Boss power='strong enough' age='250'/>
                <Person name='Andreyka' age='23'/>
                <Person name='Fenia' age='123'/>
                <Person name='Lola' age='73'/>
                <Person name='Pete' age='13'/>

            </div>
        )
        // return React.createElement('div', {className: 'App'},
        //     React.createElement('h1', null, 'Hi, I\'m Andreyka!!!'))
    }
}

export default App
