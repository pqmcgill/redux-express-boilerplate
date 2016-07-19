import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import DevTools from './containers/DevTools';
import App from './containers/App';
import MessagesContainer from './containers/MessagesContainer';
import startConnection from './util/socket';

const store = configureStore();

startConnection(store);

render (
	<Provider store={ store }>
		<div>
			<Router history={ browserHistory }>
				<Route path='/' component={ App } />
				<Route path='/messages' component={ MessagesContainer } />
			</Router>
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('root')
);
