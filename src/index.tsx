import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistore } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

import HomePage from './enhance/Homepage';

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistore}>
			<HomePage />
		</PersistGate>
	</Provider>,
	document.getElementById('root'),
);
