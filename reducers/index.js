import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const sample = (state = 'foobar', action) => {
	switch(action.type) {
		case types.FOO:
			return 'foobbar';
		case types.BAR:
			return 'barbasol';
		default: 
			return state;
	}
};

const rootReducer = combineReducers({
	sample
});

export default rootReducer;
