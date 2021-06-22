import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Heading1 from '..';

afterEach(() => {
	cleanup();
});

test('should render Hello from heading 1', () => {
	render(<Heading1>Hello</Heading1>);
	const headingElm = screen.getByTestId('heading-1');
	expect(headingElm).toBeInTheDocument();
	expect(headingElm).toHaveTextContent('Hello');
});

test('Match Heading1 Snapshot', () => {
	const tree = renderer.create(<Heading1>Hello</Heading1>).toJSON();

	expect(tree).toMatchSnapshot();
});
