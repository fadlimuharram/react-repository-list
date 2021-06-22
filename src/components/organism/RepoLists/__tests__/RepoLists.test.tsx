import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Result } from '../../../../redux/reducers/Repo/list';

import UserList from '..';

afterEach(() => {
	cleanup();
});

const dataResults: Result[] = [
	{
		id: 183882608,
		node_id: 'MDEwOlJlcG9zaXRvcnkxODM4ODI2MDg=',
		name: 'AbsensiApp',
		full_name: 'fadlimuharram/AbsensiApp',
		private: false,
		owner: {
			login: 'fadlimuharram',
			id: 17509747,
			node_id: 'MDQ6VXNlcjE3NTA5NzQ3',
			avatar_url: 'https://avatars.githubusercontent.com/u/17509747?v=4',
			gravatar_id: '',
			url: 'https://api.github.com/users/fadlimuharram',
			html_url: 'https://github.com/fadlimuharram',
			followers_url: 'https://api.github.com/users/fadlimuharram/followers',
			following_url: 'https://api.github.com/users/fadlimuharram/following{/other_user}',
			gists_url: 'https://api.github.com/users/fadlimuharram/gists{/gist_id}',
			starred_url: 'https://api.github.com/users/fadlimuharram/starred{/owner}{/repo}',
			subscriptions_url: 'https://api.github.com/users/fadlimuharram/subscriptions',
			organizations_url: 'https://api.github.com/users/fadlimuharram/orgs',
			repos_url: 'https://api.github.com/users/fadlimuharram/repos',
			events_url: 'https://api.github.com/users/fadlimuharram/events{/privacy}',
			received_events_url: 'https://api.github.com/users/fadlimuharram/received_events',
			type: 'User',
			site_admin: false,
		},
		html_url: 'https://github.com/fadlimuharram/AbsensiApp',

		fork: false,
		url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp',
		forks_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/forks',
		keys_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/keys{/key_id}',
		collaborators_url:
			'https://api.github.com/repos/fadlimuharram/AbsensiApp/collaborators{/collaborator}',
		teams_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/teams',
		hooks_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/hooks',
		issue_events_url:
			'https://api.github.com/repos/fadlimuharram/AbsensiApp/issues/events{/number}',
		events_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/events',
		assignees_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/assignees{/user}',
		branches_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/branches{/branch}',
		tags_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/tags',
		blobs_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/git/blobs{/sha}',
		git_tags_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/git/tags{/sha}',
		git_refs_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/git/refs{/sha}',
		trees_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/git/trees{/sha}',
		statuses_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/statuses/{sha}',
		languages_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/languages',
		stargazers_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/stargazers',
		contributors_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/contributors',
		subscribers_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/subscribers',
		subscription_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/subscription',
		commits_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/commits{/sha}',
		git_commits_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/git/commits{/sha}',
		comments_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/comments{/number}',
		issue_comment_url:
			'https://api.github.com/repos/fadlimuharram/AbsensiApp/issues/comments{/number}',
		contents_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/contents/{+path}',
		compare_url:
			'https://api.github.com/repos/fadlimuharram/AbsensiApp/compare/{base}...{head}',
		merges_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/merges',
		archive_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/{archive_format}{/ref}',
		downloads_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/downloads',
		issues_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/issues{/number}',
		pulls_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/pulls{/number}',
		milestones_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/milestones{/number}',
		notifications_url:
			'https://api.github.com/repos/fadlimuharram/AbsensiApp/notifications{?since,all,participating}',
		labels_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/labels{/name}',
		releases_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/releases{/id}',
		deployments_url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp/deployments',
		created_at: '2019-04-28T08:53:29Z',
		updated_at: '2019-04-28T08:53:43Z',
		pushed_at: '2019-04-28T08:53:41Z',
		git_url: 'git://github.com/fadlimuharram/AbsensiApp.git',
		ssh_url: 'git@github.com:fadlimuharram/AbsensiApp.git',
		clone_url: 'https://github.com/fadlimuharram/AbsensiApp.git',
		svn_url: 'https://github.com/fadlimuharram/AbsensiApp',

		size: 140,
		stargazers_count: 0,
		watchers_count: 0,
		language: 'Java',
		has_issues: true,
		has_projects: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: false,
		forks_count: 0,
		mirror_url: null,
		archived: false,
		disabled: false,
		open_issues_count: 0,

		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: 'master',
	},
	{
		id: 171251331,
		node_id: 'MDEwOlJlcG9zaXRvcnkxNzEyNTEzMzE=',
		name: 'absensiReact',
		full_name: 'fadlimuharram/absensiReact',
		private: false,
		owner: {
			login: 'fadlimuharram',
			id: 17509747,
			node_id: 'MDQ6VXNlcjE3NTA5NzQ3',
			avatar_url: 'https://avatars.githubusercontent.com/u/17509747?v=4',
			gravatar_id: '',
			url: 'https://api.github.com/users/fadlimuharram',
			html_url: 'https://github.com/fadlimuharram',
			followers_url: 'https://api.github.com/users/fadlimuharram/followers',
			following_url: 'https://api.github.com/users/fadlimuharram/following{/other_user}',
			gists_url: 'https://api.github.com/users/fadlimuharram/gists{/gist_id}',
			starred_url: 'https://api.github.com/users/fadlimuharram/starred{/owner}{/repo}',
			subscriptions_url: 'https://api.github.com/users/fadlimuharram/subscriptions',
			organizations_url: 'https://api.github.com/users/fadlimuharram/orgs',
			repos_url: 'https://api.github.com/users/fadlimuharram/repos',
			events_url: 'https://api.github.com/users/fadlimuharram/events{/privacy}',
			received_events_url: 'https://api.github.com/users/fadlimuharram/received_events',
			type: 'User',
			site_admin: false,
		},
		html_url: 'https://github.com/fadlimuharram/absensiReact',

		fork: false,
		url: 'https://api.github.com/repos/fadlimuharram/absensiReact',
		forks_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/forks',
		keys_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/keys{/key_id}',
		collaborators_url:
			'https://api.github.com/repos/fadlimuharram/absensiReact/collaborators{/collaborator}',
		teams_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/teams',
		hooks_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/hooks',
		issue_events_url:
			'https://api.github.com/repos/fadlimuharram/absensiReact/issues/events{/number}',
		events_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/events',
		assignees_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/assignees{/user}',
		branches_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/branches{/branch}',
		tags_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/tags',
		blobs_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/git/blobs{/sha}',
		git_tags_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/git/tags{/sha}',
		git_refs_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/git/refs{/sha}',
		trees_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/git/trees{/sha}',
		statuses_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/statuses/{sha}',
		languages_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/languages',
		stargazers_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/stargazers',
		contributors_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/contributors',
		subscribers_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/subscribers',
		subscription_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/subscription',
		commits_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/commits{/sha}',
		git_commits_url:
			'https://api.github.com/repos/fadlimuharram/absensiReact/git/commits{/sha}',
		comments_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/comments{/number}',
		issue_comment_url:
			'https://api.github.com/repos/fadlimuharram/absensiReact/issues/comments{/number}',
		contents_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/contents/{+path}',
		compare_url:
			'https://api.github.com/repos/fadlimuharram/absensiReact/compare/{base}...{head}',
		merges_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/merges',
		archive_url:
			'https://api.github.com/repos/fadlimuharram/absensiReact/{archive_format}{/ref}',
		downloads_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/downloads',
		issues_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/issues{/number}',
		pulls_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/pulls{/number}',
		milestones_url:
			'https://api.github.com/repos/fadlimuharram/absensiReact/milestones{/number}',
		notifications_url:
			'https://api.github.com/repos/fadlimuharram/absensiReact/notifications{?since,all,participating}',
		labels_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/labels{/name}',
		releases_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/releases{/id}',
		deployments_url: 'https://api.github.com/repos/fadlimuharram/absensiReact/deployments',
		created_at: '2019-02-18T09:13:28Z',
		updated_at: '2019-02-18T09:16:25Z',
		pushed_at: '2019-02-18T09:16:23Z',
		git_url: 'git://github.com/fadlimuharram/absensiReact.git',
		ssh_url: 'git@github.com:fadlimuharram/absensiReact.git',
		clone_url: 'https://github.com/fadlimuharram/absensiReact.git',
		svn_url: 'https://github.com/fadlimuharram/absensiReact',

		size: 255,
		stargazers_count: 0,
		watchers_count: 0,
		language: 'JavaScript',
		has_issues: true,
		has_projects: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: false,
		forks_count: 0,
		mirror_url: null,
		archived: false,
		disabled: false,
		open_issues_count: 0,

		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: 'master',
	},
];

test('should render First List', () => {
	render(<UserList lists={dataResults} isLoading={false} />);
	const elm = screen.getByTestId('repo-lists');
	expect(elm).toBeInTheDocument();
	expect(elm).toHaveTextContent(dataResults[0].name);
	expect(elm).toHaveTextContent(dataResults[0].owner.login);

	expect(elm).toHaveTextContent(dataResults[0].language || '');
	expect(elm).toHaveTextContent(dataResults[0].default_branch);
});

test('should render Second List', () => {
	render(<UserList lists={dataResults} isLoading={false} />);
	const elm = screen.getByTestId('repo-lists');
	expect(elm).toBeInTheDocument();
	expect(elm).toHaveTextContent(dataResults[1].name);
	expect(elm).toHaveTextContent(dataResults[1].owner.login);

	expect(elm).toHaveTextContent(dataResults[1].language || '');
	expect(elm).toHaveTextContent(dataResults[1].default_branch);
});

test('Match User Repo List Snapshot', () => {
	const tree = renderer.create(<UserList lists={dataResults} isLoading={false} />).toJSON();

	expect(tree).toMatchSnapshot();
});

test('should render Loading condition', () => {
	render(<UserList lists={dataResults} isLoading />);

	const elm = screen.getByTestId('loading-content-1');
	expect(elm).toBeInTheDocument();

	const elm2 = screen.getByTestId('loading-content-2');
	expect(elm2).toBeInTheDocument();

	const elm3 = screen.getByTestId('loading-content-3');
	expect(elm3).toBeInTheDocument();
});
