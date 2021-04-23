/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Modal from 'react-awesome-modal';
import AnswersModal from './AnswersModal.jsx';
import Answer from './Answer.jsx';

class ListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      helpful: 0,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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
              onClick={() => {
                setCount((c) => c + 1);
              }}
            >Yes {`(${this.state.helpful}) |`}
            </button>
            <button style={{ border: 'none', background: 'white' }} onClick={this.showModal} type="button">Add Answer</button>
          </span>
        </div>
        {Object.keys(this.props.questions.answers).map((keys, index) =>
          <Answer answer={this.props.questions.answers[keys]} key={index} />)}
        <Modal height="400" visible={this.state.visible} onClickAway={this.hideModal}>
          <AnswersModal
            handleClose={this.hideModal}
          />
        </Modal>
      </div>
    );
  }
}

export default ListEntry;
