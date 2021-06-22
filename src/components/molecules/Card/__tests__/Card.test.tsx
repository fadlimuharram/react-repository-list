import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Card from '..';

afterEach(() => {
	cleanup();
});

const data = {
	owner: {
		login: 'fadlimuharram',
	},
	name: 'AbsensiApp',
	url: 'https://api.github.com/repos/fadlimuharram/AbsensiApp',
	language: 'Javascript',
	defaultBranch: 'Master',
};

test('should render First Card', () => {
	render(
		<Card
			owner={data.owner.login}
			name={data.name}
			url={data.url}
			language={data.language}
			defaultBranch={data.defaultBranch}
		/>,
	);
	const elm = screen.getByTestId('card');
	expect(elm).toBeInTheDocument();
	expect(elm).toHaveTextContent(data.owner.login);
	expect(elm).toHaveTextContent(data.name);
	expect(elm).toHaveTextContent(data.language);
	expect(elm).toHaveTextContent(data.defaultBranch);
});

test('Match Card Snapshot', () => {
	const tree = renderer
		.create(
			<Card
				owner={data.owner.login}
				name={data.name}
				url={data.url}
				language={data.language}
				defaultBranch={data.defaultBranch}
			/>,
		)
		.toJSON();

	expect(tree).toMatchSnapshot();
});
