import React from 'react';

const MessageInput = props => {
	const { onSubmit } = props;

	this.handleChange = (e) => {

	};

	this.handleSubmit = () => {
	
	};

	return (
		<span>
			<input type="text" onChange={ this.handleChange } />
			<button onClick={ this.handleSubmit }>submit message</button>
		</span>
	);
};

export default MessageInput;
