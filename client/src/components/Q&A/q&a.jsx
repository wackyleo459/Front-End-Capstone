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
      <div className="qandanf">
        <h2>Questions &amp; Answers</h2>
        <List />
      </div>
    );
  }
}

export default QandA;
