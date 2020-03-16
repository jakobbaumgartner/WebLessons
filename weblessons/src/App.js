import React from 'react';
import './App.css';
import YouTube from 'react-youtube';

import Application from './Components/Application'

class App extends React.Component {
	constructor() {
		super()
		this.confirmLogin = this.confirmLogin.bind(this)
		this.setName = this.setName.bind(this)
		this.setMail = this.setMail.bind(this)
		this.state = {
			page: 'main',
			name: 'unknown',
			mail: 'unknown',
			login : false
		}
	}

	confirmLogin() {
		this.setState({login: true})
		console.log(this.state.login)
	}

	setName(event) {
		this.setState({ name: event.target.value })
		console.log(event.target.value)
	}

	setMail (event) {
		this.setState({ mail: event.target.value })
		console.log(event.target.value)
	}

	render() {
		return (
			<div className="App">
				<Application
					name={this.state.name}
					mail={this.state.mail}
					setName={this.setName}
					setMail={this.setMail}
					confirmLogin={this.confirmLogin}
					page = {this.state.page}
				/>
			</div>
		)
	}
}


export default App;
