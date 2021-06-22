/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Heading1 from '../../components/atoms/label/Heading1';

import RepoLists from '../../components/organism/RepoLists';
import { HomeProps } from '../../enhance/Homepage';

const HomePage: React.FC<HomeProps> = ({ onGetUsersRepo, Repo, onGetFirstUsersRepo }) => {
	const [page, setPage] = useState(1);

	useEffect(() => {
		if (Repo.response.results.length <= 0) onGetFirstUsersRepo(page);
	}, []);

	useEffect(() => {
		if (!Repo.allIsLoaded) {
			const onScroll = () => {
				if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
					setPage(page + 1);
					onGetUsersRepo(page + 1);
				}
			};
			window.addEventListener('scroll', onScroll);
			return () => window.removeEventListener('scroll', onScroll);
		}
	}, [page, onGetUsersRepo, Repo.allIsLoaded]);

	if (Repo.response.results.length > 0) {
		return (
			<div className="container">
				<Heading1>Fadli Muharram Repository</Heading1>
				<RepoLists lists={Repo.response.results} isLoading={Repo.isLoading} />
			</div>
		);
	}
	return <> </>;
};

export default HomePage;
