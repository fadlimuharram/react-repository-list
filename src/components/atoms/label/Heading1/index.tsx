import React from 'react';
import { Wrapper } from './style';

const Heading1: React.FC = ({ children }) => {
	return <Wrapper data-testid="heading-1">{children}</Wrapper>;
};

export default Heading1;
