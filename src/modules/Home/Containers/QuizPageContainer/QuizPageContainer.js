import React, {Component, PropTypes} from 'react';
import DnDQuizContainer from '../DnDQuizContainer/DnDQuizContainer';

export class QuizPageContainer extends Component {


  render() {

    return (
      <div>
        <h1>Quiz</h1>
        <DnDQuizContainer/>
      </div>
    );
  }

}


export default QuizPageContainer;
