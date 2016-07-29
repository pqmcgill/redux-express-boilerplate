import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import DevTools from './containers/DevTools';
import App from './containers/App';

const store = configureStore();

render (
	<Provider store={ store }>
		<div>
			<Router history={ browserHistory }>
				<Route path='/' component={ App } />
			</Router>
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('root')
);
