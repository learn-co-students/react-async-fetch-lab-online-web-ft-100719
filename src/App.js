// create your App component here
import React, { Component } from 'react'

export class App extends Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Could not fetch pets');
      }
    })
    .then(data => {
      this.setState({
        peopleInSpace: data.people
      })
    })
  }
  
  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, id) => <h3 key={id}> {person.name} </h3> ) }
      </div>
    )
  }
}

export default App
