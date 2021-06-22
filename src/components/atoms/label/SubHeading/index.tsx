import React from 'react';
import { Wrapper } from './style';

const SubHeading: React.FC = ({ children }) => {
	return <Wrapper data-testid="sub-heading">{children}</Wrapper>;
};

export default SubHeading;
