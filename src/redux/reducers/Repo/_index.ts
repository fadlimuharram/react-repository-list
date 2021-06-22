import { Root as Response } from './list';

export interface RepoInitialState {
	response: Response;
	isLoading: boolean;
	allIsLoaded: boolean;
}

export const initialState: RepoInitialState = {
	response: {
		results: [],
	},
	isLoading: false,
	allIsLoaded: false,
};
