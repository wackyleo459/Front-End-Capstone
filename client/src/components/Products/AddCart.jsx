import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const pulldownQty = function(input) {
  var result = [];
  if (input < 15) {
    for (let i = 1; i <= input; i++) {
      result.push(<option key={i}>{i}</option>)
    }
  } else {
    for (let i = 1; i <= 15; i++) {
      result.push(<option key={i}>{i}</option>)
    }
  }
  return result;
}

const AddCart = ({ skus }) => {
  const [selectedSize, setSize] = useState('XS');

  const selectSize = (event) => {
    setSize(event.target.value);
  };

  const availQty = skus.find(item => item.size === selectedSize).quantity;

  const reset = (e) => {
    e.preventDefault();
    document.getElementById('selectForm').reset();
  }

  //dropdown becomes inactive
  return (
    <div className="add">
      <div className='addSelect'>
        <form id="selectForm">
          <label id="size">{'  size  '}
          <select onChange={selectSize}>
              {skus.map(({ size }, ind) => (
                <option value={size} key={ind}>{size}</option>
              ))}
            </select>
          </label>
          <label id="quantity">{'  quantity  '}
          <select defaultValue="1">
            {pulldownQty(availQty)}
            </select>
          </label>
          <button id="addToBag" type="button" onClick={reset}>
            <span>Add to Bag</span>
          </button>
        </form>


      </div>
    </div>
  )
}

export default AddCart;
{/*<Form>
  <Form.Group controlId="selectForm">
    <Form.Label>size</Form.Label>
    <Form.Control as="select" size="sm" custom>
      <option>1</option>

    </Form.Control>
    <Form.Label>quantity</Form.Label>
    <Form.Control as="select" size="sm" custom>
      <option>1</option>

    </Form.Control>
  </Form.Group>
</Form> */}
