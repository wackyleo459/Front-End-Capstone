/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import axios from "axios";
import Modal from "react-awesome-modal";
import AnswersModal from "./AnswersModal.jsx";
import Answers from "./Answers.jsx";

const url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax";
const TOKEN = process.env.API_KEY;

class ListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      helpful: this.props.questions.question_helpfulness,
      visible: false,
      voted: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.setCount = this.setCount.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  hideModal() {
    this.setState({
      visible: false,
    });
  }

  setCount() {
    axios({
      method: "put",
      url: `${url}/qa/questions/${16060}/helpful`,
      data: {
        question_id: this.props.questions.question_id,
      },
      headers: {
        Authorization: TOKEN || process.env.API_KEY,
      },
    })
      .then(
        this.setState({
          helpful: this.state.helpful + 1,
          voted: true,
        })
      )
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="questionEntry">
        <div>
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>
            Q: {this.props.questions.question_body}
          </span>
          <span className="questionInfo">
            Helpful?
            <button
              className="yesButtonnf"
              type="button"
              onClick={this.setCount}
              disabled={this.state.voted}
            >
              Yes {`(${this.state.helpful})`}
            </button>
            <button
              style={{ border: "none", background: "rgb(245, 245, 245)" }}
              onClick={this.showModal}
              type="button"
            >
              Add Answer
            </button>
          </span>
          <Modal
            height="760"
            width="800"
            visible={this.state.visible}
            onClickAway={this.hideModal}
          >
            <AnswersModal
              name={this.props.name}
              id={this.props.questions.question_id}
              question={this.props.questions.question_body}
              handleClose={this.hideModal}
            />
          </Modal>
        </div>
        <Answers answers={this.props.questions.answers} />
      </div>
    );
  }
}

export default ListEntry;
