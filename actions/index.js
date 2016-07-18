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

export function loadingFoobar () {
	return { type: types.LOADING_FOOBAR };
}

export function asyncFoobar () {
	return dispatch => {
		dispatch(loadingFoobar());

		setTimeout(() => {
			dispatch(foobar());
		}, 1000);
	}
}
