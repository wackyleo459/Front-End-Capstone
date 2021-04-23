import React from 'react';

class AnswersModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      answer: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h2>Submit your Answer</h2>
        <span>ProductName</span>
        <div>
          <textarea rows="10" cols="60" width="20" onChange={this.handleChange} value={this.state.answer} />
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

export default AnswersModal;
