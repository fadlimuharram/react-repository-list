import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SubHeading from '..';

afterEach(() => {
	cleanup();
});

test('should render Hello from Sub Heading', () => {
	render(<SubHeading>Hello</SubHeading>);
	const headingElm = screen.getByTestId('sub-heading');
	expect(headingElm).toBeInTheDocument();
	expect(headingElm).toHaveTextContent('Hello');
});

test('Match Sub Heading Snapshot', () => {
	const tree = renderer.create(<SubHeading>Hello</SubHeading>).toJSON();

	expect(tree).toMatchSnapshot();
});
