import React, { Component } from 'react';
import { connect } from 'react-redux';
import { noDropDownFlag, falseFlag } from '../actions';
import { bindActionCreators } from 'redux';

// Import css and component for this
import MarkSection from './MarkSection';
import Domains from './Domains';

class MainBody extends Component {
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<div>
				<span>Phone number</span>
				<div className="slide-bk">
					<div className="nav-bar">
						<button>Nos domains</button>
						<button>Avis clients</button>
						<button>Demandar un devis</button>
					</div>
				</div>

				<MarkSection />
				<Domains />
			</div>
		);
	}
}

const mapStateToProps = state => ({
  reserveTitle: state.reserveFlag
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    noDropDownFlag,
    falseFlag
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);