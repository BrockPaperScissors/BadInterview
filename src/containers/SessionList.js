// import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { createSession } from '../actions/actions';

// class SessionList extends Component {
// 	createNewSession() {
// 		return this.props.session.map((session) => {
// 			return (
// 				<li key={session.id} onClick={() => this.props.createSession(session)}>
// 					{session.id}
// 				</li>
// 			);
// 		});
// 	}
// 	render() {
// 		return <ul>{this.createNewSession()}</ul>;
// 	}
// }

// function mapStateToProps(state) {
// 	return {
// 		session: state.session,
// 	};
// }

// function matchDispatchToProps(dispatch) {
// 	return bindActionCreators({ createSession: createSession }, dispatch);
// }

// export default connect(mapStateToProps, matchDispatchToProps)(SessionList);
