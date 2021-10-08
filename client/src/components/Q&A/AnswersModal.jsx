import React from "react";
import axios from "axios";
import { storage } from "../../../../firsebase.js";
import API_KEY from "../../../../config.js";

const url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax";

const TOKEN = API_KEY || process.env.API_KEY;

class AnswersModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: "",
      name: "",
      email: "",
      pictures: [],
      file: null,
      urls: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.setFile = this.setFile.bind(this);
    this.setURL = this.setURL.bind(this);
    this.removePic = this.removePic.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    axios({
      method: "post",
      url: `${url}/qa/questions/${this.props.id}/answers`,
      data: {
        body: this.state.answer,
        name: this.state.name,
        email: this.state.email,
        photos: this.state.urls,
        question_id: this.props.id,
        errors: {},
      },
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((res) => console.log(res))
      .then(this.props.handleClose)
      .then(
        this.setState({
          answer: "",
          email: "",
          name: "",
          pictures: [],
          urls: [],
        })
      )
      .catch((err) => console.error(err));
  }

  validateEmail() {
    const re = /\S+@\S+\.\S+/;
    return re.test(this.state.email);
  }

  findErrors() {
    const errors = {};
    if (!this.state.name || this.state.name === "") {
      errors.name = "invalid name";
    } else if (!this.state.email || !validateEmail()) {
      errors.email = "invalid email";
    } else if (!this.state.answer || this.state.answer === "") {
      errors.answer = "invalid answer";
    }
    return errors;
  }

  checkError(field) {
    if (this.state.errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
      const newErrors = findErrors();
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      }
    }
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  }

  handleFile(e) {
    e.preventDefault();
    var img = URL.createObjectURL(e.target.files[0]);
    this.setState({
      file: e.target.files[0],
      pictures: [...this.state.pictures, img],
    });
    let file = e.target.files[0];
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      () => {},
      (error) => console.error(error),
      () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            this.setFile(null);
            this.setURL(url);
          });
      }
    );
  }

  removePic(src) {
    for (let i = 0; i < this.state.pictures.length; i++) {
      if (this.state.pictures[i] === src) {
        let pics = this.state.pictures;
        let urls = this.state.urls;
        let removedurls = this.state.urls.splice(i, 1);
        let removedpics = this.state.pictures.splice(i, 1);
        this.setState({
          pictures: pics,
          urls: urls,
        });
      }
    }
  }

  setFile(firefile) {
    this.setState({
      file: firefile,
    });
  }

  setURL(fireurl) {
    this.setState({
      urls: [...this.state.urls, fireurl],
    });
  }

  render() {
    if (this.state.pictures.length === 0) {
      return (
        <div style={{ position: "relative" }}>
          <h2
            style={{
              textAlign: "center",
              textDecoration: "underline",
              padding: "15px",
            }}
          >
            Submit your Answer
          </h2>
          <span style={{ marginLeft: "30px", fontSize: "20px" }}>
            {this.props.name}: {this.props.question}
          </span>
          <div className="modalnf">
            <textarea
              name="answer"
              rows="10"
              cols="80"
              maxLength="1000"
              onChange={this.handleChange}
              value={this.state.answer}
            />
          </div>
          <div>
            <div style={{ marginLeft: "30px", marginTop: "10px" }}>
              <div>Your Nickname:</div>
              <input
                name="name"
                className="nicknamenf"
                type="text"
                maxLength="60"
                onChange={this.handleChange}
              />
            </div>
            <div style={{ padding: "10px", marginLeft: "20px" }}>
              <div>Your Email:</div>
              <input
                name="email"
                className="emailnf"
                type="text"
                maxLength="60"
                onChange={this.handleChange}
              />
              <form style={{ marginTop: "10px" }} action="/action_page.php">
                {" "}
                Upload a picture:
                <input type="file" name="filename" onChange={this.handleFile} />
                <span style={{ color: "grey", padding: "7px" }}>
                  5 remaining
                </span>
              </form>
            </div>
          </div>
          <button
            style={{
              padding: "10px",
              left: "20px",
              top: "695px",
              background: "white",
              position: "absolute",
            }}
            onClick={this.handleSubmit}
            type="submit"
          >
            Submit
          </button>
          <button
            type="button"
            className="cancelButtonnf"
            onClick={this.props.handleClose}
          >
            Cancel
          </button>
        </div>
      );
    } else {
      return (
        <div style={{ position: "relative" }}>
          <h2
            style={{
              textAlign: "center",
              textDecoration: "underline",
              padding: "15px",
            }}
          >
            Submit your Answer
          </h2>
          <span style={{ marginLeft: "30px", fontSize: "20px" }}>
            {this.props.name}: {this.props.question}
          </span>
          <div className="modalnf">
            <textarea
              name="answer"
              rows="10"
              cols="80"
              maxLength="1000"
              onChange={this.handleChange}
              value={this.state.answer}
            />
          </div>
          <div>
            <div style={{ marginLeft: "30px", marginTop: "10px" }}>
              <div>Your Nickname:</div>
              <input
                name="name"
                type="text"
                className="nicknamenf"
                maxLength="60"
                onChange={this.handleChange}
              />
            </div>
            <div style={{ padding: "10px", marginLeft: "20px" }}>
              <div>Your Email:</div>
              <input
                name="email"
                type="text"
                className="emailnf"
                maxLength="60"
                onChange={this.handleChange}
              />
              <form style={{ marginTop: "10px" }} action="/action_page.php">
                {" "}
                Upload a picture:
                <input
                  type="file"
                  name="filename"
                  onChange={this.handleFile}
                  disabled={this.state.pictures.length >= 5}
                />
                <span style={{ color: "grey", padding: "7px" }}>
                  {5 - this.state.pictures.length} remaining
                </span>
                <div>
                  {this.state.pictures.map((pic, index) => {
                    return (
                      <img
                        className="modalPic"
                        src={pic}
                        key={index}
                        onClick={() => this.removePic(pic)}
                      />
                    );
                  })}
                </div>
              </form>
            </div>
          </div>
          <button
            style={{
              padding: "10px",
              left: "20px",
              top: "695px",
              background: "white",
              position: "absolute",
            }}
            onClick={this.handleSubmit}
            type="submit"
          >
            Submit
          </button>
          <button
            type="button"
            className="cancelButtonnf"
            onClick={this.props.handleClose}
          >
            Cancel
          </button>
        </div>
      );
    }
  }
}

export default AnswersModal;
