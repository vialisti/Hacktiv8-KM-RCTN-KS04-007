import React, { Component } from 'react';
import './App.css';

import Navbar from './component/navbar';
import Hero from './component/hero';
import Content from './component/content';
import Footer from './component/footer';

export default class App extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Hero />
				<Content />
				<Footer />
			</>
		);
	}
}
