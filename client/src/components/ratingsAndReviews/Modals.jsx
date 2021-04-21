import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Rating from 'react-rating';
import axios from 'axios';


class Modals extends Component {
    constructor(props) {
      super(props);

      this.state = {
        visible: false
      }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      axios.post('http://localhost:3000/reviews', {modalData: this.state.modalData})
        .then((res) => {
          this.setState({
            newReview: res.data
          }, () => console.log(this.state))
        })
        .catch((err) => console.error(err))
    }

    handleChange(event) {
      event.preventDefault()
      let name = event.target.name;
      this.setState({
        [name]: Number(event.target.value)
      })
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
        <input className="buttonNd" type="button" value="ADD A REVIEW    +" onClick={() => this.openModal()} />
          <Modal visible={this.state.visible} width="1200" height="800" effect="fadeInUp" id="modalNd" onClickAway={() => this.closeModal()}>
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
                    <textarea rows="5" cols="60" width="20" className="modalTextAreaNd"></textarea>
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
                        <td><input type="radio" name="size" value="A size to small"/>A size to small</td>
                        <td><input type="radio" name="size" value="A size to small"/>1/2 a size too small</td>
                        <td><input type="radio" name="size" value="A size to small"/>Perfect</td>
                        <td><input type="radio" name="size" value="A size to small"/>1/2 a size too big</td>
                        <td><input type="radio" name="size" value="A size to small"/>A size too wide</td>
                      </tr>
                      <tr>
                        <td><b>Width</b></td>
                        <td><input type="radio" name="width" value="A size to small"/>Too narrow</td>
                        <td><input type="radio" name="width" value="A size to small"/>Slightly narrow</td>
                        <td><input type="radio" name="width" value="A size to small"/>Perfect</td>
                        <td><input type="radio" name="width" value="A size to small"/>Slightly wide</td>
                        <td><input type="radio" name="width" value="A size to small"/>Too wide</td>
                      </tr>
                      <tr>
                        <td><b>Comfort</b></td>
                        <td><input type="radio" name="comfort" value="A size to small"/>Uncomfortable</td>
                        <td><input type="radio" name="comfort" value="A size to small"/>Slightly Uncomfortable</td>
                        <td><input type="radio" name="comfort" value="A size to small"/>Ok</td>
                        <td><input type="radio" name="comfort" value="A size to small"/>Comfortable</td>
                        <td><input type="radio" name="comfort" value="A size to small"/>Perfect</td>
                      </tr>
                      <tr>
                        <td><b>Quality</b></td>
                        <td><input type="radio" name="Quality" value="A size to small"/>Poor</td>
                        <td><input type="radio" name="Quality" value="A size to small"/>Below Average</td>
                        <td><input type="radio" name="Quality" value="A size to small"/>What I expected</td>
                        <td><input type="radio" name="Quality" value="A size to small"/>Pretty great</td>
                        <td><input type="radio" name="Quality" value="A size to small"/>Perfect</td>
                      </tr>
                      <tr>
                        <td><b>Length</b></td>
                        <td><input type="radio" name="Length" value="A size to small"/>Runs Short</td>
                        <td><input type="radio" name="Length" value="A size to small"/>Runs slightly short</td>
                        <td><input type="radio" name="Length" value="A size to small"/>Perfect</td>
                        <td><input type="radio" name="Length" value="A size to small"/>Runs slightly long</td>
                        <td><input type="radio" name="Length" value="A size to small"/>Runs long</td>
                      </tr>
                      <tr>
                        <td><b>Fit</b></td>
                        <td><input type="radio" name="Fit" value="A size to small"/>Runs tight</td>
                        <td><input type="radio" name="Fit" value="A size to small"/>Runs slightly tight</td>
                        <td><input type="radio" name="Fit" value="A size to small"/>Perfect</td>
                        <td><input type="radio" name="Fit" value="A size to small"/>Runs slightly long</td>
                        <td><input type="radio" name="Fit" value="A size to small"/>Runs long</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                 <div className="reviewBodyNd">
                     <label id="labelNd"><b>* Review</b></label>
                     <br/>
                     <textarea rows="5" cols="60" width="20" className="modalTextAreaNd" ></textarea>
                 </div>
                 <div className="uploadPhotosNd">
                     <label id="labelNd"><b>Upload your photos</b></label>
                     <br/>
                     <input type="file" id="uploadPhotosNd" accept="image/*"/>
                 </div>

                 <div className="nicknameNd">
                     <label id="labelNd"><b>* Nickname</b></label>
                     <br/>
                     <input type="text" id="nicknameNd"/>
                 </div>
                     <div className="emailNd">
                     <label id="labelNd"><b>* email</b></label>
                     <br/>
                     <input type="text" id="emailNd"/>

                     </div>

                 <div className="submitButtonNd">
                     <input type="button" value="submit" id="submitButtonNd" onClick={this.handleSubmit}/>
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