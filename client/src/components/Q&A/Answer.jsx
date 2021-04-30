/* eslint-disable arrow-body-style */
import React from 'react';
import Moment from 'react-moment';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.answer.helpfulness,
      lightBoxDisplay: false,
      imageToShow: '',
    }
    this.addCount = this.addCount.bind(this);
    this.showImage = this.showImage.bind(this);
    this.hideImage = this.hideImage.bind(this);
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  showImage(image) {
    this.setState({
      imageToShow: image,
      lightBoxDisplay: true
    });
  }

  hideImage() {
    this.setState({
      lightBoxDisplay: false
    });
  }

  render() {
    return (
      <div style={{ padding: '10px' }}>
        <div style={{ padding: '10px' }}>
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>A:</span> {this.props.answer.body}
        </div>
        <div>
          {this.props.answer.photos.map((img, index) => {
            return <img className="answerImgnf" onClick={() => this.showImage(img)} src={img} key={index} alt="image" />
          })}
          {this.state.lightBoxDisplay ?
            <div className="lightbox">
              <img className="lightbox-img" onClick={this.hideImage} src={this.state.imageToShow}></img>
            </div>
          : ''}
        </div>
        <div>
          <span className="answerInfo">
            by {this.props.answer.answerer_name}, <Moment format="MMM D, YYYY">{this.props.answer.date.slice(0, 10)}</Moment>
            <span className="answernf">
              <span style={{ padding: '5px' }}>Helpful?</span>
              <button
                className="yesButtonnf"
                onClick={this.addCount}
                type="button"
              >
                Yes
                {` (${this.state.count})`}
              </button>
              <button style={{ border: 'none', background: 'rgb(255, 255, 240)' }} type="button" onClick={(e) => alert('This answer has been reported.')}>Report</button>
            </span>
          </span>
        </div>
      </div>
    );
  }
};

export default Answer;
