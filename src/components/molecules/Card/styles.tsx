import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 400px;
	height: 400px;
	background-color: #fff;
	box-shadow: 0 1rem 2rem rgb(0 0 0 / 15%);
	margin-top: 8rem;
	margin-right: 1rem;
	margin-left: 1rem;
	transition: all 0.5s;
	word-break: break-word;
	text-align: center;
	&:hover {
		transform: scale(105%);
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		margin-top: 1rem;
		li {
			text-align: center;

			&:not(:last-child) {
				border-bottom: 1px solid #eee;
			}
		}
	}
`;
