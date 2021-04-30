import React from 'react';
import { storage } from '../../../../firebase.js';

class AnswersModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: '',
      pictures: [],
      file: null,
      urls: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.imageUpload = this.imageUpload.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.setFile = this.setFile.bind(this);
    this.setURL = this.setURL.bind(this);
  }

  handleChange(e) {
    this.setState({
      answer: e.target.value,
    });
  }

  handleFile(e) {
    var img = URL.createObjectURL(e.target.files[0]);
    this.setState({
      file: e.target.files[0],
      pictures: [...this.state.pictures, img]
    });
  }

  setFile(firefile) {
    this.setState({
      file: firefile
    });
  }

  setURL(fireurl) {
    this.setState({
      urls: [...fireurl]
    });
  }

  imageUpload(e) {
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
    uploadTask.on('state_changed', console.log, console.error, () => {
      storage
      .ref('images')
      .child(file.name)
      .getDownloadURL()
      .then((url) => {
        this.setFile(null);
        this.setURL(url);
      });
    });
  }

  render() {
    if (this.state.pictures.length === 0) {
      return (
        <div style={{ position: 'relative', background: 'white' }}>
          <h2 style={{ textAlign: "center", textDecoration: "underline" }}>Submit your Answer</h2>
          <span style={{ marginLeft: '65px', fontSize: '20px' }}>{this.props.name}: {this.props.question}</span>
          <div className="modalnf">
            <textarea rows="15" cols="80" maxLength="1000" onChange={this.handleChange} value={this.state.answer} />
          </div>
          <div>
            <div style={{ marginLeft: '65px'}}>Your Nickname:
              <input type="text" maxLength="60"/>
            </div>
            <div style={{ padding: '10px', marginLeft: '55px'}}>Your Email:
              <input type="text" maxLength="60"/>
            <form style={{ marginTop: '10px' }} action="/action_page.php"> Upload a picture:
              <input type="file" name="filename" onChange={this.handleFile} />
            </form>
            </div>
          </div>
          <button style={{ padding: '10px', left: '20px', top: '670px', background: 'white', position: 'absolute' }} type="submit">
            Submit
          </button>
          <button type="button" className="cancelButtonnf" onClick={this.props.handleClose}>
            Cancel
          </button>
        </div>
      )
    } else {
      return (
        <div style={{ position: 'relative' }}>
          <h2 style={{ textAlign: "center", textDecoration: "underline" }}>Submit your Answer</h2>
          <span style={{ marginLeft: '65px', fontSize: '20px' }}>{this.props.name}: {this.props.question}</span>
          <div className="modalnf">
            <textarea rows="15" cols="80" maxLength="1000" onChange={this.handleChange} value={this.state.answer} />
          </div>
          <div>
            <div style={{ marginLeft: '65px'}}>Your Nickname:
              <input type="text" maxLength="60"/>
            </div>
            <div style={{ padding: '10px', marginLeft: '55px'}}>Your Email:
              <input type="text" maxLength="60"/>
            <form style={{ marginTop: '10px' }} action="/action_page.php"> Upload a picture:
              <input type="file" name="filename" onChange={this.handleFile} disabled={this.state.pictures.length >= 5}/>
              <div>
                {this.state.pictures.map((pic, index) => {
                  return <img className="modalPic" src={pic} key={index} />
                })}
              </div>
            </form>
            </div>
          </div>
          <button style={{ padding: '10px', left: '20px', top: '675px', background: 'white', position: 'absolute' }} type="submit">
            Submit
          </button>
          <button type="button" className="cancelButtonnf" onClick={this.props.handleClose}>
            Cancel
          </button>
        </div>
      );
    }
  }
}

export default AnswersModal;
