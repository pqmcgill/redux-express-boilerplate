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

const rootReducer = combineReducers({
	sample
});

export default rootReducer;
