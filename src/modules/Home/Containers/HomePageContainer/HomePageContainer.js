import React, {Component, PropTypes} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Debug from '../../../Framework/Debug';

export class HomePageContainer extends Component {

  static propTypes = {

  };

  constructor() {
    super();
  }

  componentDidMount() {
    console.log('[HomePageContainer] init');
  }

  render() {
    const {children, loggedIn, user} = this.props;

    return (
      <div className="home-page-container">
        Home
      </div>
    );
  }

}


export default connect(
  (state) => ({

  }),
  (dispatch) => bindActionCreators({

  }, dispatch)
)(HomePageContainer);
