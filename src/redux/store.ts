import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import _reducers from './reducers';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const persistConfig = {
	key: 'dataTelkom',
	storage,
	whitelist: [''],
};

const persistedReducer = persistReducer(persistConfig, _reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mdl = composeEnhancers(applyMiddleware(reduxThunk, promise));
export const store = createStore(persistedReducer, mdl);
export const persistore = persistStore(store as any);
