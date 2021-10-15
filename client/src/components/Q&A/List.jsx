/* eslint-disable react/no-array-index-key */
import React from "react";
import Modal from "react-awesome-modal";
import QuestionsModal from "./QuestionsModal.jsx";
import ListEntry from "./ListEntry.jsx";
import axios from "axios";
import API_KEY from "../../../../config.js";

const url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/";

const auth = {
  headers: {
    Authorization: API_KEY || process.env.API_KEY,
  },
};

class List extends React.Component {
  // console.log(dummyData.results)
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      questions: [],
      visible: false,
      moreQuestions: false,
      name: "",
      currentProduct: "",
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
    this.showLessQuestions = this.showLessQuestions.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
    this.setState({
      currentProduct: this.props.currentProduct.id,
    });
  }

  componentDidUpdate(prevProp) {
    if (this.props.currentProduct !== prevProp.currentProduct) {
      this.setState({
        currentProduct: this.props.currentProduct.id,
        name: this.props.currentProduct.name,
      });
    }
  }

  getQuestions() {
    axios
      .get(
        `http://localhost:3000/qa/questions/?product_id=${this.state.currentProduct}`
      )
      .then((res) =>
        this.setState({
          questions: res.data,
          name: this.props.currentProduct.name,
        })
      )
      .catch((err) => console.error(err));
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

  showMoreQuestions() {
    this.setState({
      moreQuestions: true,
    });
  }

  showLessQuestions() {
    this.setState({
      moreQuestions: false,
    });
  }

  changeHandler(e) {
    this.setState({
      searchValue: e.target.value,
    });
  }

  render() {
    if (this.state.questions.length === 0) {
      return <h2>Loading...</h2>;
    } else if (this.state.searchValue.length >= 3) {
      return (
        <React.Fragment>
          <div className="questionInput">
            <input
              className="questionSearch"
              type="text"
              onChange={(e) => this.changeHandler(e)}
              value={this.state.searchValue}
              placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
              size="120"
              style={{
                height: "40px",
                padding: "5px",
                fontSize: "15px",
                textIndent: "17px",
              }}
            />
            <i
              className="fas fa-search fa-lg"
              style={{ position: "absolute", color: "grey", marginLeft: "84%" }}
            ></i>
          </div>
          <ul className="QAlist">
            {this.state.questions.results
              .filter((question) => {
                return (
                  question.question_body
                    .toLowerCase()
                    .indexOf(this.state.searchValue.toLowerCase()) !== -1
                );
              })
              .map((question, index) => (
                <ListEntry
                  name={this.state.name}
                  id={this.state.currentProduct}
                  questions={question}
                  key={index}
                />
              ))}
          </ul>
          <button
            type="button"
            onClick={this.showLessQuestions}
            className="moreQuestions"
          >
            Less Answered Questions
          </button>
          <div className="dividernf" />
          <button
            type="submit"
            onClick={() => this.showModal()}
            className="submitQuestion"
          >
            Add A Question
            <i style={{ padding: "5px" }} className="fas fa-plus"></i>
          </button>
          <Modal
            className="questionsModalnf"
            height="600"
            visible={this.state.visible}
            onClickAway={this.hideModal}
          >
            <QuestionsModal
              name={this.state.name}
              handleClose={this.hideModal}
              id={this.state.currentProduct}
            />
          </Modal>
        </React.Fragment>
      );
    } else if (
      this.state.questions.results.length <= 4 &&
      this.state.questions.results.length > 0
    ) {
      return (
        <React.Fragment>
          <div className="questionInput">
            <input
              className="questionSearch"
              type="text"
              onChange={(e) => this.changeHandler(e)}
              value={this.state.searchValue}
              placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
              size="120"
              style={{
                height: "40px",
                padding: "5px",
                fontSize: "15px",
                textIndent: "17px",
              }}
            />
            <i
              className="fas fa-search fa-lg"
              style={{ position: "absolute", color: "grey", marginLeft: "84%" }}
            ></i>
          </div>
          <ul className="QAlist">
            {this.state.questions.results.map((question, index) => (
              <ListEntry
                name={this.state.name}
                id={this.state.currentProduct}
                questions={question}
                key={index}
              />
            ))}
          </ul>
          <button type="button" className="moreQuestions">
            More Answered Questions
          </button>
          <div className="dividernf" />
          <button
            type="submit"
            onClick={() => this.showModal()}
            className="submitQuestion"
          >
            Add A Question
            <i style={{ padding: "5px" }} className="fas fa-plus"></i>
          </button>
          <Modal
            className="questionsModalnf"
            height="600"
            visible={this.state.visible}
            onClickAway={this.hideModal}
          >
            <QuestionsModal
              name={this.state.name}
              handleClose={this.hideModal}
              id={this.state.currentProduct}
            />
          </Modal>
        </React.Fragment>
      );
    } else if (
      this.state.questions.results.length > 4 &&
      this.state.moreQuestions === false
    ) {
      return (
        <React.Fragment>
          <div className="questionInput">
            <input
              className="questionSearch"
              type="text"
              onChange={(e) => this.changeHandler(e)}
              value={this.state.searchValue}
              placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
              size="120"
              style={{
                height: "40px",
                padding: "5px",
                fontSize: "15px",
                textIndent: "17px",
              }}
            />
            <i
              className="fas fa-search fa-lg"
              style={{ position: "absolute", color: "grey", marginLeft: "84%" }}
            ></i>
          </div>
          <ul className="QAlist">
            {this.state.questions.results.slice(0, 4).map((question, index) => (
              <ListEntry
                name={this.state.name}
                id={this.state.currentProduct}
                questions={question}
                key={index}
              />
            ))}
          </ul>
          <button
            type="button"
            onClick={this.showMoreQuestions}
            className="moreQuestions"
          >
            More Answered Questions
          </button>
          <div className="dividernf" />
          <button
            type="submit"
            onClick={() => this.showModal()}
            className="submitQuestion"
          >
            Add A Question
            <i style={{ padding: "5px" }} className="fas fa-plus"></i>
          </button>
          <Modal
            className="questionsModalnf"
            height="600"
            visible={this.state.visible}
            onClickAway={this.hideModal}
          >
            <QuestionsModal
              name={this.state.name}
              handleClose={this.hideModal}
              id={this.state.currentProduct}
            />
          </Modal>
        </React.Fragment>
      );
    } else if (
      this.state.questions.results.length > 4 &&
      this.state.moreQuestions === true
    ) {
      return (
        <React.Fragment>
          <div className="questionInput">
            <input
              className="questionSearch"
              type="text"
              onChange={(e) => this.changeHandler(e)}
              value={this.state.searchValue}
              placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
              size="120"
              style={{
                height: "40px",
                padding: "5px",
                fontSize: "15px",
                textIndent: "17px",
              }}
            />
            <i
              className="fas fa-search fa-lg"
              style={{ position: "absolute", color: "grey", marginLeft: "84%" }}
            ></i>
          </div>
          <ul className="QAlist">
            {this.state.questions.results.map((question, index) => (
              <ListEntry
                name={this.state.name}
                id={this.state.currentProduct}
                questions={question}
                key={index}
              />
            ))}
          </ul>
          <button
            type="button"
            onClick={this.showLessQuestions}
            className="moreQuestions"
          >
            Less Answered Questions
          </button>
          <div className="dividernf" />
          <button
            type="submit"
            onClick={() => this.showModal()}
            className="submitQuestion"
          >
            Add A Question
            <i style={{ padding: "5px" }} className="fas fa-plus"></i>
          </button>
          <Modal
            className="questionsModalnf"
            height="600"
            visible={this.state.visible}
            onClickAway={this.hideModal}
          >
            <QuestionsModal
              name={this.state.name}
              handleClose={this.hideModal}
              id={this.state.currentProduct}
            />
          </Modal>
        </React.Fragment>
      );
    }
  }
}

export default List;
