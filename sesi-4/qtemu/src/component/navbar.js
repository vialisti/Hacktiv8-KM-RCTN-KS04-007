import React, { Component } from 'react';
import '../style/navbar.css';

export default class navbar extends Component {
	render() {
		return (
			<>
				<div className='navbar'>
					<div className='nav-menu'>
						<ul>
							<li className='logo'>QTemu</li>
							<li>Create Meetup</li>
							<li>Explore</li>
						</ul>
					</div>
					<div className='login-menu'>
						<button>Login</button>
					</div>
				</div>
			</>
		);
	}
}
