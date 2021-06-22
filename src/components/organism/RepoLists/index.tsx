import React from 'react';
import Card from '../../molecules/Card';
import LoadingContent from '../../molecules/LoadingContent';
import { Wrapper } from './styles';
import { Result } from '../../../redux/reducers/Repo/list';

interface IProps {
	lists: Result[];
	isLoading: boolean;
}

const RepoLists: React.FC<IProps> = ({ lists, isLoading }) => {
	const renderLists = () => {
		return lists.map(v => (
			<Card
				key={v.id}
				owner={v.owner.login}
				name={`${v.name}`}
				url={v.html_url}
				language={v.language || ''}
				defaultBranch={v.default_branch}
			/>
		));
	};
	return (
		<Wrapper data-testid="repo-lists">
			{renderLists()}

			{isLoading && (
				<>
					<LoadingContent testId="1" />
					<LoadingContent testId="2" />
					<LoadingContent testId="3" />
				</>
			)}
		</Wrapper>
	);
};

export default RepoLists;
