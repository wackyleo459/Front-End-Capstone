import React from 'react';
import Modals from './Modals.jsx';

const ModalChars = ({ handleChange }) => {
  return (
    <div>
      <div className="characteristicsNd">
        <label id="labelNd"><b>* Characteristics</b></label>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
              </tr>
            </thead>
          <tbody>
            <tr>
              <td><b>Size</b></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Size" value="1"/>A size to small</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Size" value="2"/>1/2 a size too small</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Size" value="3"/>Perfect</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Size" value="4"/>1/2 a size too big</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Size" value="5"/>A size too wide</label></td>
            </tr>
            <tr>
              <td><b>Width</b></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Width" value="1"/>Too narrow</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Width" value="2"/>Slightly narrow</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Width" value="3"/>Perfect</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Width" value="4"/>Slightly wide</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Width" value="5"/>Too wide</label></td>
            </tr>
            <tr>
              <td><b>Comfort</b></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Comfort" value="1"/>Uncomfortable</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Comfort" value="2"/>Slightly Uncomfortable</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Comfort" value="3"/>Ok</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Comfort" value="4"/>Comfortable</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Comfort" value="5"/>Perfect</label></td>
            </tr>
            <tr>
              <td><b>Quality</b></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Quality" value="1"/>Poor</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Quality" value="2"/>Below Average</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Quality" value="3"/>What I expected</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Quality" value="4"/>Pretty great</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="Quality" value="5"/>Perfect</label></td>
            </tr>
            <tr>
              <td><b>Length</b></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="length" value="1"/>Runs Short</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="length" value="2"/>Runs slightly short</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="length" value="3"/>Perfect</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="length" value="4"/>Runs slightly long</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="length" value="5"/>Runs long</label></td>
            </tr>
            <tr>
              <td><b>Fit</b></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="fit" value="1"/>Runs tight</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="fit" value="2"/>Runs slightly tight</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="fit" value="3"/>Perfect</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="fit" value="4"/>Runs slightly long</label></td>
              <td><label><input onChange={(event) => handleChange(event)} type="radio" name="fit" value="5"/>Runs long</label></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ModalChars;