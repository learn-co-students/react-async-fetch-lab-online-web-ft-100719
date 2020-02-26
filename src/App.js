import React, { Component } from "react";

// create your App component here
export default class App extends Component {

  state = {
    astros: {}
  }
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          astros: json
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.astros}
      </div>
    )
  }
}