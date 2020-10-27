import React, { Component } from 'react';


// Import components and css for this
import './style.css';
import MainBody from './MainBody';

class LandingPage extends Component {
	render() {
		return (
			<div className="LandingPage">
				<MainBody />
			</div>
		);
	}
}

export default LandingPage;