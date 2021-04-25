/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Modal from 'react-awesome-modal';
import AnswersModal from './AnswersModal.jsx';
import Answers from './Answers.jsx';

class ListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      helpful: this.props.questions.question_helpfulness,
      visible: false,
    }
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
    this.setState({
      helpful: this.state.helpful + 1
    });
  }

  render() {
    return (
      <div style={{ padding: '10px' }}>
        <div>
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
            Q: {this.props.questions.question_body}
          </span>
          <span className="questionInfo" style={{ float: 'right' }}>
            Helpful?
            <button
              style={{ border: 'none', background: 'white' }}
              type="button"
              onClick={this.setCount}
            >Yes {`(${this.state.helpful}) |`}
            </button>
            <button style={{ border: 'none', background: 'white' }} onClick={this.showModal} type="button">Add Answer</button>
          </span>
            <Modal height="400" visible={this.state.visible} onClickAway={this.hideModal}>
              <AnswersModal handleClose={this.hideModal} />
            </Modal>
        </div>
          <Answers questions={this.props.questions}/>
      </div>
    );
  }
}

export default ListEntry;
