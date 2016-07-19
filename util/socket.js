import io from 'socket.io-client';
import * as actions from '../actions';
import * as types from '../constants/ActionTypes';

let socket = null;

export const chatMiddleware = store => next => action => {
	if (action.type === types.ADD_MESSAGE) {
		socket.emit('message_added', action.message);
	}
	return next(action);
};

export default store => {
	const socket = io.connect(`${location.protocol}//${location.host}`);

	socket.on('message', message => {
		store.dispatch(actions.receiveMessage(message));
	});
}
