/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import List from './List.jsx';

class QandA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      searchValue: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form style={{ textAlign: 'center' }}>
          <input
            className="questionSearch"
            type="text"
            onChange={this.changeHandler}
            value={this.state.searchValue}
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            size="90"
            style={{ height: '35px', padding: '5px', fontSize: '15px' }}
          />
        </form>
        <List />
      </div>
    );
  }
}

export default QandA;
