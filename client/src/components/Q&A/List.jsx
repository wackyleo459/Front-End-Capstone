/* eslint-disable react/no-array-index-key */
import React from 'react';
import Modal from 'react-awesome-modal';
import QuestionsModal from './QuestionsModal.jsx';
import ListEntry from './ListEntry.jsx';
import axios from 'axios';

class List extends React.Component {
  // console.log(dummyData.results)
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      questions: [],
      visible: false,
      moreQuestions: false,
    }
    this.getQuestions = this.getQuestions.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
    this.showLessQuestions = this.showLessQuestions.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    axios.get('/qa/questions')
    .then((res) => this.setState({
      questions: res.data
    }))
    .catch((err) => console.error(err))
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  hideModal() {
    this.setState({
      visible: false,
    });
  }

  showMoreQuestions() {
    this.setState({
      moreQuestions: true,
    });
  }

  showLessQuestions() {
    this.setState({
      moreQuestions: false,
    });
  }

  changeHandler(e) {
    this.setState({
      searchValue: e.target.value,
    });
  }

  render() {
    if (this.state.questions.length === 0) {
      return <h2>Loading...</h2>
    } else if (this.state.searchValue.length >= 3) {
      return (
        <div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <input
            className="questionSearch"
            type="text"
            onChange={(e) => this.changeHandler(e)}
            value={this.state.searchValue}
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            size="100"
            style={{ height: '45px', padding: '5px', fontSize: '15px', textIndent: '17px' }}
          />
          <i class="fas fa-search fa-lg" style={{ position: 'absolute', color: 'grey', top: '23px', marginLeft: '770px' }}></i>
        </div>
          <ul>
            {this.state.questions.results.filter((question) => {
              return question.question_body.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1
            }).map((question, index) => <ListEntry questions={question} key={index} />)}
          </ul>
          <button type="button" onClick={this.showLessQuestions} className="moreQuestions">Less Answered Questions</button>
          <div className="dividernf" />
          <button type="submit" onClick={() => this.showModal()} className="submitQuestion">Add A Question
          <i style={{ padding: '5px' }} class="fas fa-plus"></i></button>
          <Modal height="500" width="800" visible={this.state.visible} onClickAway={this.hideModal}>
            <QuestionsModal handleClose={this.hideModal} />
          </Modal>
        </div>
      )
    } else if (this.state.questions.results.length <= 4 && this.state.questions.results.length > 0) {
      return (
        <div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <input
            className="questionSearch"
            type="text"
            onChange={(e) => this.changeHandler(e)}
            value={this.state.searchValue}
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            size="100"
            style={{ height: '45px', padding: '5px', fontSize: '15px', textIndent: '17px' }}
          />
          <i class="fas fa-search fa-lg" style={{ position: 'absolute', color: 'grey', top: '23px', marginLeft: '770px' }}></i>
        </div>
          <ul>
            {this.state.questions.results.map((question, index) => <ListEntry questions={question} key={index} />)}
          </ul>
          <button type="button" className="moreQuestions">More Answered Questions</button>
          <div className="dividernf" />
          <button type="submit" onClick={() => this.showModal()} className="submitQuestion">Add A Question
          <i style={{ padding: '5px' }} class="fas fa-plus"></i></button>
          <Modal height="500" width="800" visible={this.state.visible} onClickAway={this.hideModal}>
            <QuestionsModal handleClose={this.hideModal} />
          </Modal>
        </div>
      )
    } else if (this.state.questions.results.length > 4 && this.state.moreQuestions === false) {
      return (
        <div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <input
            className="questionSearch"
            type="text"
            onChange={(e) => this.changeHandler(e)}
            value={this.state.searchValue}
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            size="100"
            style={{ height: '45px', padding: '5px', fontSize: '15px', textIndent: '17px' }}
          />
          <i class="fas fa-search fa-lg" style={{ position: 'absolute', color: 'grey', top: '23px', marginLeft: '770px' }}></i>
        </div>
          <ul>
            {this.state.questions.results.slice(0, 4).map((question, index) => <ListEntry questions={question} key={index} />)}
          </ul>
          <button type="button" onClick={this.showMoreQuestions} className="moreQuestions">More Answered Questions</button>
          <div className="dividernf" />
          <button type="submit" onClick={() => this.showModal()} className="submitQuestion">Add A Question
          <i style={{ padding: '5px' }} class="fas fa-plus"></i></button>
          <Modal height="500" width="800" visible={this.state.visible} onClickAway={this.hideModal}>
            <QuestionsModal handleClose={this.hideModal} />
          </Modal>
        </div>
      )
    } else if (this.state.questions.results.length > 4 && this.state.moreQuestions === true) {
      return (
        <div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <input
            className="questionSearch"
            type="text"
            onChange={(e) => this.changeHandler(e)}
            value={this.state.searchValue}
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            size="100"
            style={{ height: '45px', padding: '5px', fontSize: '15px', textIndent: '17px' }}
          />
          <i class="fas fa-search fa-lg" style={{ position: 'absolute', color: 'grey', top: '23px', marginLeft: '770px' }}></i>
        </div>
          <ul>
            {this.state.questions.results.map((question, index) => <ListEntry questions={question} key={index} />)}
          </ul>
          <button type="button" onClick={this.showLessQuestions} className="moreQuestions">Less Answered Questions</button>
          <div className="dividernf" />
          <button type="submit" onClick={() => this.showModal()} className="submitQuestion">Add A Question
          <i style={{ padding: '5px' }} class="fas fa-plus"></i></button>
          <Modal height="500" width="800" visible={this.state.visible} onClickAway={this.hideModal}>
            <QuestionsModal handleClose={this.hideModal} />
          </Modal>
        </div>
      )
    }
  }
}

export default List;
