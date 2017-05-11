import React, {Component} from 'react';

import ContentContainer from '../../../App/Containers/ContentContainer/ContentContainer';


import QuizPageContainer from '../../Containers/QuizPageContainer/QuizPageContainer';

export class QuizRoute extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <ContentContainer customTitle="Quiz" id="quiz" fluid>
        <QuizPageContainer />
      </ContentContainer>
    );
  }

}

export default QuizRoute;
