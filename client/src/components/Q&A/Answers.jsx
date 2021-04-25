import React from 'react';
import Answer from './Answer.jsx';

class Answers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moreAnswers: false,
      answersLength: Object.keys(this.props.questions.answers).length
    };

    this.showMoreAnswers = this.showMoreAnswers.bind(this);
    this.showLessAnswers = this.showLessAnswers.bind(this);
  }

  showLessAnswers() {
    this.setState({
      moreAnswers: false
    })
  }

  showMoreAnswers() {
    this.setState({
      moreAnswers: true
    });
  }

  render() {
    if (this.state.answersLength < 2) {
      return (
        <div>
          {Object.keys(this.props.questions.answers).slice(0, 2).map((keys, index) =>
            <Answer answer={this.props.questions.answers[keys]} key={index} />)}
        </div>
      )
    } else if (this.state.moreAnswers === false && this.state.answersLength > 2) {
      return (
        <div>
          {Object.keys(this.props.questions.answers).slice(0, 2).map((keys, index) =>
            <Answer answer={this.props.questions.answers[keys]} key={index} />)}
            <button
            className="moreAnswers"
            type="button"
            onClick={this.showMoreAnswers}
            >Load More Answers
            </button>
        </div>
      )
    } else {
      return (
        <div>
          {Object.keys(this.props.questions.answers).map((keys, index) =>
            <Answer answer={this.props.questions.answers[keys]} key={index} />)}
            <button
            className="moreAnswers"
            type="button"
            onClick={this.showLessAnswers}
            >Show Less Answers
            </button>
        </div>
      )
    }
  }
}

export default Answers;