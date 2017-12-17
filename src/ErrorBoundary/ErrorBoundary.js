import React, { Component } from 'react'

class ErrorBoundary extends Component {

  state = {
    hasError: false,
    errorMsg: ''
  }
  
  componentDidCatch = (error, info) => {
    
    this.setState({hasError: true, errorMsg: info})
  }
  
  render() {
    return this.state.hasError ?
      <h1>Something went wrong!!! Sorry pal\nThe Error: {this.state.errorMsg}</h1> :
      this.props.children
  }
}

export default ErrorBoundary