/* eslint-disable arrow-body-style */
import React from 'react';

const Answer = (props) => {
  const [count, setCount] = React.useState(props.answer.helpfulness);
  return (
    <div style={{ padding: '10px' }}>
      A: {props.answer.body}
      <div>
        <span className="answerInfo" style={{ color: 'grey', padding: '5px' }}>
          by {props.answer.answerer_name}, {props.answer.date.slice(0, 10)}
          <span style={{ padding: '10px' }}>
            Helpful? |
            <button
              style={{ border: 'none', background: 'white' }}
              onClick={() => {
                setCount((c) => c + 1);
              }}
              type="button"
            >
              Yes
              {`(${count}) |`}
            </button>
            <button style={{ border: 'none', background: 'white' }} type="button">Report</button>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Answer;
