import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import LoadingContent from '..';

afterEach(() => {
	cleanup();
});

test('should render NLoading Content', () => {
	render(<LoadingContent testId="1" />);
	const headingElm = screen.getByTestId('loading-content-1');
	expect(headingElm).toBeInTheDocument();
});

test('Match Loading Content Snapshot', () => {
	const tree = renderer.create(<LoadingContent testId="1" />).toJSON();

	expect(tree).toMatchSnapshot();
});
