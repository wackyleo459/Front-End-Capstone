/* eslint-disable react/no-array-index-key */
import React from 'react';
import ListEntry from './ListEntry.jsx';
import dummyData from './dummyData.js';
import axios from 'axios';

class List extends React.Component {
  // console.log(dummyData.results)
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    }
    this.getQuestions = this.getQuestions.bind(this);
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

  render() {
    if (this.state.questions.length === 0) {
      return <h2>Loading...</h2>
    } else {
      return (
        <ul>
          {this.state.questions.results.map((question, index) => <ListEntry questions={question} key={index} />)}
        </ul>
      )
    }
  }
}

export default List;
