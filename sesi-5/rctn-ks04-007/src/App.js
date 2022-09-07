// import logo from './logo.svg';
import './App.css';

import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			user: '',
			gender: 'Male',
		};
		this.setGender = this.setGender.bind(this);
	}

	setUser(str) {
		this.setState({
			user: str,
		});
	}

	setGender() {
		this.setState({
			gender: this.state.gender === 'Male' ? 'Female' : 'Male',
		});
	}

	render() {
		return (
			<div className='App'>
				<h1>Hello {this.setUser()}</h1>
				<input type='text'></input>
				<button>OK</button>
				<h1>{this.setGender()}</h1>
				<button>Switch Gender</button>
			</div>
		);
	}
}

export default App;
