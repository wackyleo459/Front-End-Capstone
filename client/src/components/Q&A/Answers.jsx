import React from 'react';
import Answer from './Answer.jsx';

class Answers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moreAnswers: false,
      answersLength: Object.keys(this.props.answers).length,
      sortedAnswers: [],
      keys: Object.keys(this.props.answers),
    };

    this.showMoreAnswers = this.showMoreAnswers.bind(this);
    this.showLessAnswers = this.showLessAnswers.bind(this);
    this.sortAnswers = this.sortAnswers.bind(this);
  }

  componentDidMount() {
    this.sortAnswers(this.props.answers)
  }

  sortAnswers(answers) {
    var res = [];
    for (var key in answers) {
      res.push(answers[key])
    };
    res.sort((a, b) => (a.helpfulness > b.helpfulness) ? -1 : 1);
    this.setState({
      sortedAnswers: res
    });
  }

  showLessAnswers() {
    this.setState({
      moreAnswers: false
    });
  }

  showMoreAnswers() {
    this.setState({
      moreAnswers: true
    });
  }

  render() {
    if (this.state.moreAnswers === false && this.state.answersLength > 2) {
      return (
        <div>
          {this.state.sortedAnswers.slice(0, 2).map((answers, index) =>
            <Answer answer={answers} key={index} id={index} keys={this.state.keys}/>)}
            <button
            className="moreAnswers"
            type="button"
            onClick={this.showMoreAnswers}
            >Load More Answers
            </button>
        </div>
      )
    } else if (this.state.answersLength <= 2) {
      return (
        <div>
          {this.state.sortedAnswers.slice(0, 2).map((answers, index) =>
            <Answer answer={answers} key={index} id={index} keys={this.state.keys}/>)}
        </div>
      )
    } else {
      return (
        <div>
          {this.state.sortedAnswers.map((answers, index) =>
            <Answer answer={answers} key={index} id={index} keys={this.state.keys}/>)}
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