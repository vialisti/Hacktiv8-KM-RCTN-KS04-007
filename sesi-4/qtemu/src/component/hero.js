import React, { Component } from 'react';
import '../style/hero.css';

export default class Hero extends Component {
	render() {
		return (
			<div className='hero-container'>
				<div className='hero'>
					<div className='img-hero'>
						<img src='https://via.placeholder.com/250?text=Image+default' alt='Gambar Meeting'></img>
					</div>
					<div className='content-hero'>
						<h1>Hacktiv8 Meetup</h1>
						<table>
							<tr>
								<td>Location</td>
								<td>Jakarta, Indonesia</td>
							</tr>
							<tr>
								<td>Members</td>
								<td>1,078</td>
							</tr>
							<tr>
								<td>Organizers</td>
								<td>Adhy Wiranata</td>
							</tr>
						</table>
						<button>Join Us</button>
					</div>
				</div>
			</div>
		);
	}
}
