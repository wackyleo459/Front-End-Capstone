import React from 'react';

class QuestionsModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      question: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h2>Ask Your Question</h2>
        <span>About the ProductName</span>
        <div>
          <textarea rows="10" cols="60" width="20" onChange={this.handleChange} value={this.state.question} />
        </div>
        <button type="submit">
          Submit
        </button>
        <button type="button" onClick={this.props.handleClose}>
          Cancel
        </button>
      </div>
    );
  }
}

export default QuestionsModal;
