import React from 'react';

const AddCart = () => {
  //dynamically render avail sizes
  //dropdown becomes inactive
  return (
    <div className="add">
      <div className='addSelect'>
        <form>
          <label> size
          <select defaultValue="s">
              <option value="s">small</option>
              <option value="m">medium</option>
              <option selected value="l">large</option>
              <option value="xl">extra large</option>
            </select>
          </label>
          <label> quantity
          <select defaultValue="1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option selected value="3">3</option>
              <option value="5">5</option>
            </select>
          </label>
        </form>
      </div>
      <div className='addButton'>
        <button id="addToBag" type="button">
          <span>Add to Bag</span>
        </button>
      </div>
    </div>
  )
}

export default AddCart;