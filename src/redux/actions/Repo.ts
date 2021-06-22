import { listUsers } from '../../api/repo';
import { LIST_FIRST_REPO_USER, LIST_REPO } from '../constants';

export interface OnGetListUsersRepo {
	(page: number): void;
}

export const onGetFirstUsersRepo = (page: number): OnGetListUsersRepo => async (dispatch: any) => {
	return dispatch({
		type: LIST_FIRST_REPO_USER,
		payload: listUsers(page),
	});
};

export const onGetUsersRepo = (page: number): OnGetListUsersRepo => async (dispatch: any) => {
	return dispatch({
		type: LIST_REPO,
		payload: listUsers(page),
	});
};
