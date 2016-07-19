import React from 'react';
import MessageItem from './MessageItem';

const MessageList = props => {
	const { messages } = props;
	return (
		<ul>
			{ messages.map((message, i) => 
			  <MessageItem key={ i }
			  	author={ message.author } 
			  	message={ message.message } 
			  />
			) }
		</ul>
	);
};

export default MessageList;
