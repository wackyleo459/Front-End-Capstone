/* eslint-disable react/no-array-index-key */
import React from 'react';
import Modal from 'react-awesome-modal';
import QuestionsModal from './QuestionsModal.jsx';
import ListEntry from './ListEntry.jsx';
import axios from 'axios';

class List extends React.Component {
  // console.log(dummyData.results)
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      visible: false,
      moreQuestions: false,
    }
    this.getQuestions = this.getQuestions.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
    this.showLessQuestions = this.showLessQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    axios.get('/qa/questions')
    .then((res) => this.setState({
      questions: res.data
    }))
    .catch((err) => console.error(err))
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

  render() {
    if (this.state.questions.length === 0) {
      return <h2>Loading...</h2>
    } else if (this.state.questions.results.length <= 4 && this.state.questions.results.length > 0) {
      return (
        <div>
          <ul>
            {this.state.questions.results.map((question, index) => <ListEntry questions={question} key={index} />)}
          </ul>
          <button type="button" className="moreQuestions">More Answered Questions</button>
          <div className="dividernf" />
          <button type="submit" onClick={() => this.showModal()} className="submitQuestion">Add A Question</button>
          <Modal height="400" visible={this.state.visible} onClickAway={this.hideModal}>
            <QuestionsModal handleClose={this.hideModal} />
          </Modal>
        </div>
      )
    } else if (this.state.questions.results.length > 4 && this.state.moreQuestions === false) {
      return (
        <div>
          <ul>
            {this.state.questions.results.slice(0, 4).map((question, index) => <ListEntry questions={question} key={index} />)}
          </ul>
          <button type="button" onClick={this.showMoreQuestions} className="moreQuestions">More Answered Questions</button>
          <div className="dividernf" />
          <button type="submit" onClick={() => this.showModal()} className="submitQuestion">Add A Question</button>
          <Modal height="400" visible={this.state.visible} onClickAway={this.hideModal}>
            <QuestionsModal handleClose={this.hideModal} />
          </Modal>
        </div>
      )
    } else if (this.state.questions.results.length > 4 && this.state.moreQuestions === true) {
      return (
        <div>
          <ul>
            {this.state.questions.results.map((question, index) => <ListEntry questions={question} key={index} />)}
          </ul>
          <button type="button" onClick={this.showLessQuestions} className="moreQuestions">Less Answered Questions</button>
          <div className="dividernf" />
          <button type="submit" onClick={() => this.showModal()} className="submitQuestion">Add A Question</button>
          <Modal height="400" visible={this.state.visible} onClickAway={this.hideModal}>
            <QuestionsModal handleClose={this.hideModal} />
          </Modal>
        </div>
      )
    }
  }
}

export default List;
