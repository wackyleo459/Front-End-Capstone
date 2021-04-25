/* eslint-disable arrow-body-style */
import React from 'react';
import Moment from 'react-moment';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.answer.helpfulness,
    }
    this.addCount = this.addCount.bind(this)
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div style={{ padding: '10px' }}>
        <div style={{ padding: '10px' }}>
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>A:</span> {this.props.answer.body}
        </div>
        <div>
          <span className="answerInfo" style={{ color: 'grey', padding: '5px', marginLeft: '5px' }}>
            by {this.props.answer.answerer_name}, <Moment format="MMM D YYYY">{this.props.answer.date.slice(0, 10)}</Moment>
            <span style={{ padding: '10px' }}>
              Helpful? |
              <button
                style={{ border: 'none', background: 'white' }}
                onClick={this.addCount}
                type="button"
              >
                Yes
                {`(${this.state.count}) |`}
              </button>
              <button style={{ border: 'none', background: 'white' }} type="button">Report</button>
            </span>
          </span>
        </div>
      </div>
    );
  }
};

export default Answer;
