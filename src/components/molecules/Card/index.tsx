import React from 'react';
import Heading1 from '../../atoms/label/Heading1';
import SubHeading from '../../atoms/label/SubHeading';
import { Wrapper } from './styles';

interface IProps {
	owner: string;
	name: string;
	url: string;
	language: string;
	defaultBranch: string;
}

const Card: React.FC<IProps> = ({ name, url, language, owner, defaultBranch }) => {
	return (
		<Wrapper data-testid="card">
			<Heading1>{name}</Heading1>
			<ul>
				<li>
					<SubHeading>{owner}</SubHeading>
				</li>
				{language && (
					<li>
						<SubHeading>{language}</SubHeading>
					</li>
				)}

				<li>
					<SubHeading>{defaultBranch}</SubHeading>
				</li>
				<li>
					<a href={url} target="__blank">
						<SubHeading>Link</SubHeading>
					</a>
				</li>
			</ul>
		</Wrapper>
	);
};

export default Card;
