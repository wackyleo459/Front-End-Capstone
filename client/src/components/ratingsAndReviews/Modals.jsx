import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Rating from 'react-rating';
import { HorizontalBar } from 'react-chartjs-2';

class Modals extends Component {
    constructor(props) {
      super(props);

      this.state = {
        visible: false,
        userAndDate: '',
        body: '',
        title: '',
        recommend: '',
        responses: '',
        rating: 5,
        helpfulness: 0,
         datasets: {
           labels: ['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit']
         }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      // POST REQUEST LATERRR AXIOOOSSSS

    }

    handleChange(event) {
      event.preventDefault()
      let name = event.target.name;
      this.setState({
        [name]: Number(event.target.value)
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
        <input className="button" type="button" value="ADD A REVIEW +" onClick={() => this.openModal()} />
          <Modal visible={this.state.visible} width="800" height="700" effect="fadeInUp" onClickAway={() => this.closeModal()}>
            <div>
               <form onSubmit={this.handleSubmit} id="modalForm">

                  <div className="overAllRating">
                    <label>* Overall Rating:</label>
                    <select name="rating" onChange={(event) => this.handleChange(event)}>
                      <option name="rating" value={5}>Great</option>
                      <option name="rating" value={4}>Good</option>
                      <option name="rating" value={3}>Average</option>
                      <option name="rating" value={2}>Fair</option>
                      <option name="rating" value={1}>Poor</option>
                    </select>
                    <Rating type="radio" emptySymbol="fa fa-star-o fa-1x" fullSymbol="fa fa-star fa-1x"/>
                  </div>

                  <div className="recommendation">
                    <label>* Do you recommend this product?</label>
                    <br/>
                    <textarea rows="5" cols="60" width="20"></textarea>
                  </div>

                 <div className="addReviewChart">
                    <label>* Characteristics</label>
                    <HorizontalBar data={this.state.datasets}/>
                 </div>

                 <div className="reviewBody">
                     <label>* Review</label>
                     <br/>
                     <textarea rows="5" cols="60" width="20"></textarea>
                 </div>

                     <label>Upload your photos</label>
                 <div className="uploadButton">
                     <br/>
                     <input type="file" accept="image/*"/>
                 </div>

                 <div className="emailAndNickname">
                     <label>* Nickname</label>
                     <input type="text" width="50"/>
                     <br/>
                     <label>* email</label>
                     <input type="text"/>
                 </div>

                 <div className="submitButton">
                     <button>Submit</button>
                 </div>

                 <a onClick={() => this.closeModal()}>Cancel</a>
               </form>
            </div>
           </Modal>
      </section>
    );
    }
}

export default Modals;