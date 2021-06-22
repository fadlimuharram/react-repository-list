import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import HomePage from '../../screen/Homepage';
import { onGetUsersRepo, OnGetListUsersRepo, onGetFirstUsersRepo } from '../../redux/actions';
import ReduxState, { RepoInitialState } from '../../redux/reducers/reduxState';

interface HomeDispatchState {
	Repo: RepoInitialState;
}

interface HomeDispatchProps {
	onGetUsersRepo: OnGetListUsersRepo;
	onGetFirstUsersRepo: OnGetListUsersRepo;
}

const mapStateToProps = (state: ReduxState): HomeDispatchState => {
	return {
		Repo: state.Repo,
	};
};

const mapDispatchToProps: HomeDispatchProps = { onGetUsersRepo, onGetFirstUsersRepo };

export type HomeProps = HomeDispatchProps & HomeDispatchState;

const enhance = compose<React.ComponentClass>(connect(mapStateToProps, mapDispatchToProps));

const render = (props: HomeProps) => <HomePage {...props} />;

export default enhance(render);
