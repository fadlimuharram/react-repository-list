import styled from 'styled-components';

export const Wrapper = styled.div`
	.wrapperLoading {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 400px;
		height: 400px;
		background-color: #fff;
		box-shadow: 0 1rem 2rem rgb(0 0 0 / 15%);
		margin-top: 5rem;
		margin-right: 1rem;
		margin-left: 1rem;
	}

	.content {
		width: 100%;
		border: 1px solid white;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		padding: 20px;
		justify-content: space-between;
	}

	.stripe {
		border: 1px solid white;
		height: 20%;
		width: 100%;
		background-color: #babbbc;
	}

	.wrapperLoading.loading .img,
	.wrapperLoading.loading .stripe {
		animation: hintloading 2s ease-in-out 0s infinite reverse;
		-webkit-animation: hintloading 2s ease-in-out 0s infinite reverse;
	}

	@keyframes hintloading {
		0% {
			opacity: 0.2;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.2;
		}
	}

	@-webkit-keyframes hintloading {
		0% {
			opacity: 0.2;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.2;
		}
	}
`;
