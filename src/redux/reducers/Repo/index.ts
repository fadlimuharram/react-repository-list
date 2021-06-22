import { LIST_FIRST_REPO_USER, LIST_REPO } from '../../constants';
import { RepoInitialState, initialState } from './_index';
import { ActionWithPayload } from '../_payload';
import { hasObjectValue } from '../../../helper/hasValue';

const reducer = (state: RepoInitialState = initialState, action: ActionWithPayload) => {
	const currentUsers = [...state.response.results];

	switch (action.type) {
		case LIST_FIRST_REPO_USER + '_PENDING':
			return {
				...state,
				isLoading: true,
			};

		case LIST_FIRST_REPO_USER + '_FULFILLED':
			return {
				...state,
				response: {
					...state.response,
					results: action.payload.data,
				},
				isLoading: false,
			};

		case LIST_FIRST_REPO_USER + '_REJECTED':
			if (hasObjectValue(action.payload, 'response.data') && action.payload.response.data) {
				return {
					...state,
					response: {
						...state.response,
						...action.payload.response.data,
					},
					isLoading: true,
				};
			} else {
				return {
					...state,
					isLoading: true,
				};
			}

		case LIST_REPO + '_PENDING':
			return {
				...state,
				isLoading: true,
			};

		case LIST_REPO + '_FULFILLED':
			const allIsLoaded = action.payload.data.length === 0;
			return {
				...state,
				response: {
					...state.response,
					results: [...currentUsers, ...action.payload.data],
				},
				isLoading: false,
				allIsLoaded,
			};

		case LIST_REPO + '_REJECTED':
			if (hasObjectValue(action.payload, 'response.data') && action.payload.response.data) {
				return {
					...state,
					response: {
						...state.response,
						...action.payload.response.data,
					},
					isLoading: true,
				};
			} else {
				return {
					...state,
					isLoading: true,
				};
			}
		default:
			return state;
	}
};

export default reducer;
