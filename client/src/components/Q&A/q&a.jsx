/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import Modal from 'react-awesome-modal';
import QuestionsModal from './QuestionsModal.jsx';
import List from './List.jsx';

export default class QandA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler(e) {
    this.setState({
      searchValue: e.target.value,
    });
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

  render() {
    return (
      <div>
        <form>
          <input
            className="questionSearch"
            type="text"
            onChange={this.changeHandler}
            value={this.state.searchValue}
            placeholder="Have a question? Search for answers..."
            size="80"
          />
        </form>
        <List />
        <button type="button">More Answered Questions</button>
        <button type="submit" onClick={() => this.showModal()}>Add A Question</button>
        <Modal height="400" visible={this.state.visible} onClickAway={this.hideModal}>
          <QuestionsModal
            handleClose={this.hideModal}
          />
        </Modal>
      </div>
    );
  }
}
