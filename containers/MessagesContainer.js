import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';

class MessagesContainer extends Component {
	render () {
		const { messages, newMessage } = this.props;
		const { addMessage, typeMessage } = this.props.actions;
		return (
			<div>
				<h2>Messages:</h2>
				<MessageList messages={ messages } />
				<MessageInput onSubmit={ addMessage } onChange={ typeMessage } value={ newMessage } />
			</div>
		);
	}
}

MessagesContainer.propTypes = {
	messages: PropTypes.array.isRequired,
	newMessage: PropTypes.string.isRequired
};

const mapStateToProps = state => {
	return {
		messages: state.messages,
		newMessage: state.newMessage
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MessagesContainer);
