import React from 'react';

const MessageInput = props => {
	const { onSubmit, value, onChange } = props;

	const handleChange = (e) => {
		onChange(e.target.value);
	};

	const handleKeyUp = (e) => {
		if (e.keyCode === 13)
			onSubmit(value);
	};

	return (
		<span>
			<input type="text" 
				onChange={ handleChange } 
				value={ value }
				onKeyUp={ handleKeyUp }
			/>
			<button onClick={ onSubmit.bind(null, value) }>submit message</button>
		</span>
	);
};

export default MessageInput;
