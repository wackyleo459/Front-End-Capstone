/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import List from './List.jsx';

class QandA extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="qandanf" id="QA">
        <h3>Questions &amp; Answers</h3>
        <List />
      </div>
    );
  }
}

export default QandA;
