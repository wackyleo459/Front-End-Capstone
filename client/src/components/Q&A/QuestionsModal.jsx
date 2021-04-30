import React from 'react';
import axios from 'axios';

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const TOKEN = require('../../../../config.js');

class QuestionsModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      name: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  }

  submitQuestion(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${url}/qa/questions`,
      data: {
        body: this.state.question,
        name: this.state.nickname,
        email: this.state.email,
        product_id: 16060,
      },
      headers: {
        Authorization: TOKEN,
      },
    })
  }

  render() {
    return (
      <div style={{ background: 'white' }}>
        <h2 style={{ textAlign: "center", textDecoration: "underline" }}>Ask Your Question</h2>
        <span style={{ marginLeft: '65px', fontSize: '20px' }} >About the {this.props.name}</span>
        <div className="modalnf">
          <textarea name='question' rows="15" cols="80" fontSize="20px" maxLength="1000" onChange={this.handleChange} value={this.state.question} />
        </div>
        <div>
          <div style={{ marginLeft: '65px'}}>Your Nickname:
            <input name='name' onChange={this.handleChange} type="text" maxLength="60"/>
          </div>
          <div style={{ padding: '10px', marginLeft: '55px'}}>Your Email:
            <input name='email' onChange={this.handleChange} type="text" maxLength="60"/>
          </div>
        </div>
        <button type="submit" onClick={this.submitQuestion} style={{ padding: '10px', marginLeft: '20px', background: 'white', marginTop: '30px' }}>
          Submit
        </button>
        <button type="button" style={{ padding: '10px', float: 'right', marginRight: '20px', background: 'white', marginTop: '30px', border: 'none', textDecoration: 'underline', color: 'rgb(87, 86, 86)' }} onClick={this.props.handleClose}>
          Cancel
        </button>
      </div>
    );
  }
}

export default QuestionsModal;
