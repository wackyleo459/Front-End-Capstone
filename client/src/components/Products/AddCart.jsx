import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const pulldownQty = function (input) {
  var result = [];
  if (!input) { return null; }
  input < 15 ? input = input : input = 15;

  for (let i = 1; i <= input; i++) {
    result.push(<option key={i}>{i}</option>)
  }
  return result;
}

const AddCart = ({ skus }) => {

  const [selectedSize, setSize] = useState('Select Size');
  const [qty, setQty] = useState(1);
  const initialState = 'Select Size';
  const isSizeSelected = selectedSize !== initialState;


  const selectSize = (event) => {
    let size = event.target.value;
    setSize(size);
  };

  const selectQty = (event) => {
    setQty(event.target.value);
  }

  const availQty = isSizeSelected ? skus.find(item => item.size === selectedSize).quantity : null;

  const reset = (e) => {
    e.preventDefault();
    setSize(initialState);
    document.getElementById('selectForm').reset();
  }

  return (
    <div className="add">
      <form id="selectForm" style={{ display: 'inline-flex' }}>
        <label id="size">{'  size  '}
          <select onChange={selectSize}>
            <option key='0o'>Select Size</option>
            {skus.map(({ size }, ind) => (
              <option value={size} key={ind}>{size}</option>
            ))}
          </select>
        </label>
        <label id="quantity">{'  quantity  '}
          {isSizeSelected ?
            <select onChange={selectQty} defaultValue={1}>
              {pulldownQty(availQty)}
            </select> :
            <select disabled={true}><option>-</option></select>}
        </label>
      </form>

      <button id="addToBag" className="btn btn-dark" type="button" onClick={reset}>
        <span>Add to Bag</span>
      </button>
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
