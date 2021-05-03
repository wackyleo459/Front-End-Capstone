import React, { useState, useEffect, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';

const pulldownQty = function (input) {
  var result = [];
  if (!input) { return <option>N/A</option>; }

  input < 15 ? input = input : input = 15;

  for (let i = 1; i <= input; i++) {
    result.push(<option key={i}>{i}</option>)
  }
  return result;
}

const AddCart = ({ skus }) => {

  const [selectedSize, setSize] = useState('Select Size');
  const [qty, setQty] = useState();
  const initialState = 'Select Size';
  const isSizeSelected = selectedSize !== initialState;
  const target = useRef(null);
  const [show, setShow] = useState(false);
  const [cart, addToCart] = useState(null);

  const selectSize = (event) => {
    let size = event.target.value;
    setSize(size);
    setShow(false);
  };

  const selectQty = (event) => {
    setQty(event.target.value);
  }

  const availQty = isSizeSelected ?
    skus.find(item => item.size === selectedSize).quantity
    : null;

  const checkOut = (e) => {
    e.preventDefault();
    if(!isSizeSelected) {
      document.getElementById('selectSize').click();
      setShow(true);
    }
    addToCart(cart + Number(qty));
    reset();
  }

  const reset = () => {
    setSize(initialState);
    document.getElementById('selectForm').reset();
  }

  const buttonHide = () => {
    if (!qty) { //refactor to check if ALL SIZES for one style is out of stock
      return {display: 'none'}
    }
  }

  useEffect(() => {
    if (!availQty) {
      setQty(0);
    } else if (qty === 0 && availQty) {
      setQty(1);
    } else {
      setQty(qty);
    }
  });

  return (
    <div className="add">
      <form id="selectForm" style={{ display: 'inline-flex' }}>
        <label id="size">{'  Size  '}
          <select id="selectSize"onChange={selectSize}>
            <option key='0o'>Select Size</option>
            {skus.map(({ size }, ind) => (
              <option value={size} key={ind}>{size}</option>
            ))}
          </select>
        </label>
        <label id="quantity">{'  Quantity  '}
          {isSizeSelected ?
            <select id="selectQty" onChange={selectQty} defaultValue={1}>
              {pulldownQty(availQty)}
            </select>
          : <select id="selectQty" disabled={true}><option>-</option></select>}
        </label>
      </form>

      <button id="addToBag" className="btn btn-dark"
              type="button" onClick={checkOut}
              ref={target}>
        <span>Add to Bag</span>
      </button>
      <Overlay target={target.current} show={show}
            placement='bottom-end'
            >
        {({ placement, arrowProps, show: _show, popper, ...props}) => (
          <div
            {...props}
            style={{
              backgroundColor: 'darkgray',
              padding: '4px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Please select size
          </div>
        )}
      </Overlay>
      <span className="cartItems" style={!cart ? {display: 'none'}: null}>{cart}</span>
    </div>
  )
}

export default AddCart;
