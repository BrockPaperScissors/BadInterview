import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SessionList extends Component {
	render() {
		return (
			<ul>
				<li>one</li>
				<li>two</li>
				<li>three</li>
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		session: state.session,
	};
}

export default connect(mapStateToProps)(SessionList);
