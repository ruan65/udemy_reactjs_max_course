import React, {Component} from 'react'
import classes from './Person.css'
import PropTypes from 'prop-types'


class Person extends Component {


    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount() pos=' + this.inputElement.pos)

        if (this.props.pos === 0) {

            this.inputElement.focus()
        }
    }

    render() {
        return <div className={classes.Person}>
            <p onClick={this.props.click}>Hi There {this.props.name} you are {this.props.age}</p>
            <input
                ref={(inp) => {
                    this.inputElement = inp
                }}
                type='text'
                onChange={this.props.changed}
                defaultValue={this.props.name}
            />
        </div>
    }
}


Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person
