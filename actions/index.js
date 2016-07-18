import * as types from '../constants/ActionTypes';

export function foo () {
	return { type: types.FOO };
}

export function bar () {
	return { type: types.BAR };
}

export function foobar () {
	return { type: types.FOOBAR };
}

export function asyncFoobar () {
	return dispatch => {
		setTimeout(() => {
			dispatch(foobar());
		}, 1000);
	}
}
