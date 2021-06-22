import React from 'react';
import { Wrapper } from './style';

interface IProps {
	testId?: string;
}

const LoadingContent: React.FC<IProps> = ({ testId = '' }) => {
	return (
		<Wrapper data-testid={`loading-content-${testId}`}>
			<div className="wrapperLoading loading">
				<div className="content">
					<div className="stripe small-stripe"></div>
					<div className="stripe medium-stripe"></div>
					<div className="stripe long-stripe"></div>
				</div>
			</div>
		</Wrapper>
	);
};

export default LoadingContent;
