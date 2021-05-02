import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Rating from 'react-rating';
import axios from 'axios';
import ModalAddReview from './ModalAddReview.jsx'
import ModalChars from './ModalChars.jsx'

class Modals extends Component {
    constructor(props) {
      super(props);

      this.state = {
        visible: false,
        bodyCharsRequired: 50 + ' Characters Required',
        summaryCharsRemaining: 60 + ' Characters Remaining',
        newReview: [],
        product_id: 16060,
        rating: 0,
        summary: '',
        body: '',
        recommend: true,
        name: '',
        email: '',
        photos: [],
        Size: 0,
        Width: 0,
        Comfort: 0,
        Quality: 0,
      }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBodyCharChange = this.handleBodyCharChange.bind(this);
        this.handleSummaryCharChange = this.handleSummaryCharChange.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleSubmit(event) {
      let reviewData = {
        product_id: this.state.product_id,
        rating: Number(this.state.rating),
        summary: this.state.summary,
        body: this.state.body,
        recommend: this.state.recommend === 'true' ? true : false,
        name: this.state.name,
        email: this.state.email,
        photos: this.state.photos,
        characteristics: {53856: Number(this.state.Size), 53857: Number(this.state.Width), 53858: Number(this.state.Comfort), 53859: Number(this.state.Quality)}
      };
      axios.post(`http://localhost:3000/reviews/`, reviewData)
        .then((res) => {
          this.setState({
            newReview: res.data
          }, () => console.log(res.data))
        })
        .catch((err) => console.error(err))
    }

    handleBodyCharChange(event) {
      let input = event.target.value;
      if (input.length <= 50) {
        this.setState({
          bodyCharsRequired: (50 - input.length) + ' Characters Required'
        })
      } else {
        this.setState({
          bodyCharsRequired: (1000 - input.length) + ' Characters Remaining'
        })
      }
    }

    handleSummaryCharChange(event) {
      let input = event.target.value;
      if (input.length <= 60) {
        this.setState({
          summaryCharsRemaining: (60 - input.length) + ' Characters Remaining'
        })
      }
    }

    handleChange(event) {
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
        <input className="addReviewsButtonNd" type="button" value="ADD A REVIEW +" height="1000" onClick={() => this.openModal()}/>
          <Modal className="modalNd" visible={this.state.visible} width="2300" height="1700" effect="fadeInUp" onClickAway={() => this.closeModal()}>
            <form onSubmit={(event) => this.handleSubmit(event)} id="modalFormNd">
                <div>
                  <ModalAddReview
                    handleChange={this.handleChange}
                    handleBodyCharChange={this.handleBodyCharChange}
                    handleSummaryCharChange={this.handleSummaryCharChange}
                    bodyCharsRequired={this.state.bodyCharsRequired}
                    summaryCharsRequired={this.state.summaryCharsRemaining}
                    closeModal={this.closeModal}/>
                </div>
                <div id="submitButtonNd">
                  <input className="submitButtonNd" type="submit"/>
                  <input className="closeModalNd" type="button" value="Cancel" onClick={() => this.closeModal()}/>
                </div>
              </form>
            </Modal>
        </section>
    );
  }
}
export default Modals;