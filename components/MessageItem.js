import React from 'react';

const MessageItem = props => {
	const { author, message } = props;
	return (
		<li>{ author } said: { message }</li>
	);
};

export default MessageItem;
