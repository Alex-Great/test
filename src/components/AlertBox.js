import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBIcon } from 'mdbreact';


class AlertBox extends Component {
	constructor(props) {
		super(props);

		this.fadeOut = this.fadeOut.bind(this);

		this.state = {
			error: ''
		}
	}

	componentWillReceiveProps(newProps) {
		console.log("error")
		console.log(newProps)
		this.setState({
			error: newProps.errors.error
		});
	}

	fadeOut = () => {
		setTimeout(() => {
			this.setState({
				error: ''
			})
		}, 3000);
	} 

	render() {
		return (
			<>
				{
					(this.state.error !== '') ?
						<div className="AlertBox">
							<MDBIcon style={{fontSize: 15+"px", marginRight: 7+"px"}} icon="exclamation-triangle" />
							{this.state.error}
							{this.fadeOut()}
							<MDBIcon style={{fontSize: 15+"px", marginLeft: 7+"px"}} icon="exclamation" />
						</div>
					:
						<div className="hidden"></div>
				}
			</>
		);
	}
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps)(AlertBox);