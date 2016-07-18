import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const enhancer = compose(
	DevTools.instrument(),
	persistState(
		window.location.href.match(
			/[?&]debug_session=([^&#]+)\b/
		)
	)
);

export default function configureStore(preloadedState = {}) {
	const store = createStore(rootReducer, preloadedState, enhancer);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers').default;
			store.replaceReducer(nextReducer);
		});
	}

	return store;
}
