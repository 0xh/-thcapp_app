import React, {Component, PropTypes} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {updatePageTitle} from '../../Actions/AppActions';

import Container from '../../Components/Container/Container';

import Debug from '../../../Framework/Debug';

export class AppContainer extends Component {

  static propTypes = {
    children: PropTypes.node,

    loggedIn: PropTypes.bool,
    user: PropTypes.object,

    getAppConfig: PropTypes.func
  };

  constructor() {
    super();
  }

  componentDidMount() {
    console.log('[APP] bootstrap');
  }

  render() {
    const {children, loggedIn, user} = this.props;

    return (
      <div className="app-container">
        <Container>
          {children}
        </Container>
      </div>
    );
  }

}


export default connect(
  (state) => ({
    pageTitle: state.app.get('pageTitle')
  }),
  (dispatch) => bindActionCreators({
    updatePageTitle
  }, dispatch)
)(AppContainer);
