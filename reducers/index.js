import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const sample = (state = 'foobar', action) => {
	switch(action.type) {
		case types.FOO:
			return 'foobbar';
		case types.BAR:
			return 'barbasol';
		case types.FOOBAR:
			return 'sweet! async thunks are working! who\'da thunk it?!';
		case types.LOADING_FOOBAR:
			return 'loading...';
		default: 
			return state;
	}
};

const messages = (state = [], action) => {
	switch (action.type) {
		case types.RECEIVE_MESSAGE:
			return [...state, action.msg];
		case types.HYDRATE_MESSAGES:
			return action.msgs;
		default:
			return state;
	}
};

const newMessage = (state = '', action) => {
	switch (action.type) {
		case types.ADD_MESSAGE:
			return '';
		case types.TYPE_MESSAGE:
			return action.msg;
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	sample,
	messages,
	newMessage
});

export default rootReducer;
