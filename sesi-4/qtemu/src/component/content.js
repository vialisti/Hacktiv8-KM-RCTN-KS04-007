import React, { Component } from 'react';
import '../style/content.css';

export default class Content extends Component {
	render() {
		return (
			<div className='content'>
				<h2>Next Meetup</h2>
				<div className='meet-container'>
					<div className='next-meet'>
						<h3>Awesome meetup and event</h3>
						<label>25 January 2019</label>
						<p>Hello, Javascript & node.js Ninjas!</p>
						<p>
							Cras dapibus, justo nec suscipit molestie, enim mauris fringilla
							ex, in posuere mi neque at nulla. Vestibulum maximus accumsan
							felis, vel lacinia metus pulvinar at. Integer non mi et metus
							pretium pulvinar consectetur in risus. Nulla placerat tempor
							ornare. Phasellus varius eros ipsum, nec ultricies mauris varius
							nec. Pellentesque sit amet felis purus. In est magna, fermentum
							vitae porttitor sit amet, aliquet sed leo.
						</p>

						<p>see you there!</p>
						<p>
							Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS
							Organizers
						</p>
					</div>
				</div>

				<h2>About Meetup</h2>
				<div className='meet-container'>
					<div className='about-meet'>
						<p>
							Come and meet other developers interested in Javascript and it's
							library in the greater Jakarta area
						</p>
						<p>Twitter : @JakartaJS an use the hastag #jakartajs</p>
					</div>
				</div>

				<div className='judul-container'>
					<h2>Members</h2>
					<p>See all</p>
				</div>
				<div className='meet-container'>
					<div className='member'>
						<table>
							<tr>
								<td>
									<img
										src='https://via.placeholder.com/100.png/'
										alt='profile-picture'
										style={{ borderRadius: '50%' }}
									/>
								</td>
								<td>
									<div className='member-profile'>
										<h4>Organizers</h4>
										<p>Adhy Wiranata</p>
									</div>
								</td>
								<td>
									<p style={{ paddingTop: '40px', paddingLeft: '30px' }}>
										<b>4 others.</b>
									</p>
								</td>
							</tr>
						</table>
					</div>
				</div>

				<div className='judul-container'>
					<h2>Past Meetups</h2>
					<p>See all</p>
				</div>
				<div className='meet-container'>
					<div className='card'>
						<h3>27 November 2017</h3>
						<hr></hr>
						<p>#39 JakartaJS April Meetup with Kumparan</p>
						<p>
							139 <label>went</label>
						</p>
						<button>View</button>
					</div>
					<div className='card'>
						<h3>27 November 2017</h3>
						<hr></hr>
						<p>#39 JakartaJS April Meetup with Kumparan</p>
						<p>
							139 <label>went</label>
						</p>
						<button>View</button>
					</div>
					<div className='card'>
						<h3>27 November 2017</h3>
						<hr></hr>
						<p>#39 JakartaJS April Meetup with Kumparan</p>
						<p>
							139 <label>went</label>
						</p>
						<button>View</button>
					</div>
				</div>
			</div>
		);
	}
}
