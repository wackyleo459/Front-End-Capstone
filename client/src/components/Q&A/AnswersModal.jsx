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
        <h2 style={{ textAlign: "center", textDecoration: "underline" }}>Submit your Answer</h2>
        <span style={{ marginLeft: '65px', fontSize: '20px' }}>{this.props.name}: {this.props.question}</span>
        <div className="modalnf">
          <textarea rows="15" cols="80" maxLength="1000" onChange={this.handleChange} value={this.state.answer} />
        </div>
        <div>
          <div style={{ marginLeft: '65px'}}>Your Nickname:
            <input type="text" maxLength="60"/>
          </div>
          <div style={{ padding: '10px', marginLeft: '55px'}}>Your Email:
            <input type="text" maxLength="60"/>
          <form style={{ marginTop: '10px' }} action="/action_page.php"> Upload a picture:
            <input type="file" name="filename" />
          </form>
          </div>
        </div>
        <button style={{ padding: '10px', marginLeft: '20px', background: 'white' }} type="submit">
          Submit
        </button>
        <button type="button" style={{ padding: '10px', float: 'right', marginRight: '20px', background: 'white' }} onClick={this.props.handleClose}>
          Cancel
        </button>
      </div>
    );
  }
}

export default AnswersModal;
