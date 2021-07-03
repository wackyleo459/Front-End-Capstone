/* eslint-disable arrow-body-style */
import React from "react";
import axios from "axios";
import Moment from "react-moment";

const url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax";
const TOKEN = require("../../../../config.js");

TOKEN = TOKEN || process.env.API_KEY;

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.answer.helpfulness,
      lightBoxDisplay: false,
      imageToShow: "",
      report: false,
      helpful: false,
    };
    this.addCount = this.addCount.bind(this);
    this.showImage = this.showImage.bind(this);
    this.hideImage = this.hideImage.bind(this);
    this.handleReport = this.handleReport.bind(this);
  }

  addCount(e) {
    e.preventDefault();
    let answerId = this.props.keys[this.props.id];
    axios({
      method: "put",
      url: `${url}/qa/questions/${answerId}/helpful`,
      data: {
        answer_id: answerId,
      },
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(
        this.setState({
          count: this.state.count + 1,
          helpful: true,
        })
      )
      .catch((err) => console.error(err));
  }

  showImage(image) {
    this.setState({
      imageToShow: image,
      lightBoxDisplay: true,
    });
  }

  hideImage() {
    this.setState({
      lightBoxDisplay: false,
    });
  }

  handleReport(e) {
    e.preventDefault();
    let answerId = this.props.keys[this.props.id];
    axios({
      method: "put",
      url: `${url}/qa/questions/${answerId}/report`,
      data: {
        answer_id: answerId,
      },
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(
        this.setState(
          {
            report: true,
          },
          alert("This answer has been reported.")
        )
      )
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <div style={{ padding: "10px" }}>
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>A:</span>{" "}
          {this.props.answer.body}
        </div>
        <div>
          {this.props.answer.photos.map((img, index) => {
            return (
              <img
                className="answerImgnf"
                onClick={() => this.showImage(img)}
                src={img}
                key={index}
                alt="image"
              />
            );
          })}
          {this.state.lightBoxDisplay ? (
            <div className="lightbox">
              <img
                className="lightbox-img"
                onClick={this.hideImage}
                src={this.state.imageToShow}
              ></img>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <span className="answerInfo">
            by {this.props.answer.answerer_name},{" "}
            <Moment format="MMM D, YYYY">
              {this.props.answer.date.slice(0, 10)}
            </Moment>
            <span className="answernf">
              <span style={{ padding: "5px", color: "grey" }}>Helpful?</span>
              <button
                style={{ color: "grey" }}
                className="yesButtonnf"
                onClick={this.addCount}
                type="button"
                disabled={this.state.helpful}
              >
                Yes
                {` (${this.state.count})`}
              </button>
              <button
                style={{
                  border: "none",
                  background: "rgb(245, 245, 245)",
                  color: "grey",
                }}
                type="button"
                onClick={this.handleReport}
                disabled={this.state.report === true}
              >
                {this.state.report ? "reported" : "report"}
              </button>
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Answer;
