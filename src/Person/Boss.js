import React, { Component } from 'react'

class Boss extends Component {

    render() {
        return <p>I'm Boss {this.props.power} my age is {this.props.age}</p>
    }
}

export default Boss