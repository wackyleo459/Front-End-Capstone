import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Rating from 'react-rating';
import axios from 'axios';
import MetaChars from './helper.js'

class Modals extends Component {
    constructor(props) {
      super(props);

      this.state = {
        visible: false,
        charRequired: 50 + ' Characters Required',
        charExceeded: false,
        newReview: [],
        product_id: 0,
        rating: null,
        summary: null,
        body: '',
        recommend: null,
        name: null,
        email: null,
        photos: []
      }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCharChange = this.handleCharChange.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault()
      let reviewData = {
        rating: this.state.rating,
        summary: this.state.summary,
        body: this.state.body,
        recommend: (this.state.recommend === "yes") ? "true" : "false",
        name: this.state.name,
        email: this.state.email,
        photos: this.state.photos,
        characteristics: {}
      };
      axios.post(`http://localhost:3000/reviews/?${this.props.productId}`, reviewData)
        .then((data) => {
          this.setState({
            newReview: data.data
          }, () => console.log(data.data))
        })
        .catch((err) => console.error(err))
    }

    handleCharChange(event) {
      let input = event.target.value;
      if (input.length <= 50) {
        this.setState({
          charRequired: (50 - input.length) + ' Characters Required'
        })
      } else {
        this.setState({
          charRequired: (1000 - input.length) + ' Characters Remaining'
        })
      }
    }

    handleChange(event) {
      event.preventDefault()
      let name = event.target.name;
      this.setState({
        [name]: event.target.value
      }, () => console.log(this.state))
    }

    openModal() {
      this.setState({
        visible: true
      });
    }

    closeModal() {
      this.setState({
        visible: false
      });
    }

  render() {
    return (
      <section>
        <input className="addReviewsButtonNd" type="button" value="ADD A REVIEW +" onClick={() => this.openModal()} />
          <Modal className="modalNd" visible={this.state.visible} width="1200" height="800" effect="fadeInUp" id="modalNd" onClickAway={() => this.closeModal()}>
            <div>
              <form onSubmit={this.handleSubmit} id="modalFormNd">
                <h2 id="reviewFormNd">Review Form</h2>
                <div className="overAllRatingNd">
                  <label id="labelNd"><b>* Overall Rating:</b></label>
                  <select name="rating" onChange={(event) => this.handleChange(event)}>
                    <option name="rating" value={5}>5stars "Great"</option>
                    <option name="rating" value={4}>4stars "Good"</option>
                    <option name="rating" value={3}>3stars "Average"</option>
                    <option name="rating" value={2}>2stars "Fair"</option>
                    <option name="rating" value={1}>1star "Poor"</option>
                  </select>
                  </div>
                  <div className="recommendationNd">
                    <label id="labelNd"><b>* Do you recommend this product?</b></label>
                    <br/>
                    <textarea maxLength="1000" name="summary" onChange={(event) => {this.handleChange(event); this.handleCharChange(event)}} rows="5" cols="60" width="20" className="modalTextAreaNd"></textarea>
                    <p>{this.state.charRequired}</p>
                  </div>
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
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="size" value="1"/>A size to small</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="size" value="2"/>1/2 a size too small</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="size" value="3"/>Perfect</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="size" value="4"/>1/2 a size too big</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="size" value="5"/>A size too wide</label></td>
                    </tr>
                    <tr>
                      <td><b>Width</b></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="width" value="1"/>Too narrow</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="width" value="2"/>Slightly narrow</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="width" value="3"/>Perfect</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="width" value="4"/>Slightly wide</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="width" value="5"/>Too wide</label></td>
                    </tr>
                    <tr>
                      <td><b>Comfort</b></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="comfort" value="1"/>Uncomfortable</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="comfort" value="2"/>Slightly Uncomfortable</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="comfort" value="3"/>Ok</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="comfort" value="4"/>Comfortable</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="comfort" value="5"/>Perfect</label></td>
                    </tr>
                    <tr>
                      <td><b>Quality</b></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="Quality" value="1"/>Poor</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="Quality" value="2"/>Below Average</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="Quality" value="3"/>What I expected</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="Quality" value="4"/>Pretty great</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="Quality" value="5"/>Perfect</label></td>
                    </tr>
                    <tr>
                      <td><b>Length</b></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="Length" value="1"/>Runs Short</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="Length" value="2"/>Runs slightly short</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="Length" value="3"/>Perfect</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="Length" value="4"/>Runs slightly long</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="Length" value="5"/>Runs long</label></td>
                    </tr>
                    <tr>
                      <td><b>Fit</b></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="Fit" value="1"/>Runs tight</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="Fit" value="2"/>Runs slightly tight</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="Fit" value="3"/>Perfect</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="Fit" value="4"/>Runs slightly long</label></td>
                      <td><label><input onChange={(event) => this.handleChange(event)} type="radio" name="Fit" value="5"/>Runs long</label></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="reviewBodyNd">
                  <label id="labelNd"><b>* Review</b></label>
                  <br/>
                  <textarea maxLength="1000" name="body" onChange={(event) => {this.handleChange(event); this.handleCharChange(event)}} rows="5" cols="60" width="20" className="modalTextAreaNd"></textarea>
                <p>{this.state.charRequired}</p>
              </div>
                  <button name="recommend" onChange={(event) => this.handleChange(event)}>yes</button>
              <div className="uploadPhotosNd">
                  <label id="labelNd"><b>Upload your photos</b></label>
                  <br/>
                  <input type="file" id="uploadPhotosNd" accept="image/*" name="photos" onChange={(event) => this.handleChange(event)} />
              </div>

              <div className="nicknameNd">
                  <label id="labelNd"><b>* Nickname</b></label>
                  <br/>
                  <input type="text" id="nicknameNd" name="name" onChange={(event) => this.handleChange(event)} />
              </div>
                  <div className="emailNd">
                  <label id="labelNd"><b>* email</b></label>
                  <br/>
                  <input type="text" id="emailNd" name="email" onChange={(event) => this.handleChange(event)} />
              </div>
              <div className="submitButtonNd">
                  <input type="submit" id="submitButtonNd" onClick={(event) => this.handleChange(event)} />
              </div>
              <div className="closeModalNd">
                <a id="cancelButtonNd" onClick={() => this.closeModal()}>Cancel</a>
              </div>
            </form>
            </div>
          </Modal>
      </section>
    );
  }
}
export default Modals;