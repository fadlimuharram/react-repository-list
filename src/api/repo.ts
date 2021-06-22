import http from './httpService';
import BASE_URL from '../config';

export const listUsers = (page: number) => {
	return http.get(`${BASE_URL}/fadlimuharram/repos?sort=full_name&direction=asc&page=${page}`);
};
