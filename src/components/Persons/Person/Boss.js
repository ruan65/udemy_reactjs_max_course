import React, { Component } from 'react'

class Boss extends Component {

    render() {
        return (
            <div>
                <p>{this.props.children}</p>
                <p>I'm Boss {this.props.power} my age is {this.props.age}</p>
            </div>
        )
    }
}

export default Boss