import io from 'socket.io-client';
import * as actions from '../actions';
import * as types from '../constants/ActionTypes';

let socket = null;

export const chatMiddleware = store => next => action => {
	if (action.type === types.ADD_MESSAGE) {
		console.log(action.msg);
		socket.emit('message_added', action.msg);
	}
	return next(action);
};

export default store => {
	socket = io.connect(`${location.protocol}//${location.host}`);

	socket.on('message', message => {
		console.log('message loaded');
		store.dispatch(actions.receiveMessage(message));
	});

	socket.on('messages', messages => {
		store.dispatch(actions.hydrateMessages(messages));
	});
}
