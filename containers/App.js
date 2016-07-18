import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SampleActions from '../actions';

class App extends Component {
	render () {
		const { sample, actions } = this.props;
		return (
			<div>
				<h1>Hello, Worlddd!</h1>
				<h2>{ sample }</h2>
				<button onClick={ actions.foo }>Foo</button>
				<button onClick={ actions.bar }>Bar</button>
				<button onClick={ actions.asyncFoobar }>Foobar thunk</button>
			</div>
		)
	}
}

App.propTypes = {
	sample: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		sample: state.sample
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(SampleActions, dispatch)
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
