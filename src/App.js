// create your App component here

import React from 'react'

export default class App extends React.Component {
    state = {
        people: []
    }

    render() {
        return (
        <div>
            {this.state.people.map((person, id) => <div key={id}>{person.name}</div>)}
        </div>
        )
    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({people: data.people
            })
        })
    }
}
