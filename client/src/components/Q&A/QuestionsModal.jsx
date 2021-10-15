import React from "react";
import axios from "axios";

const url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax";
const TOKEN = process.env.API_KEY;

class QuestionsModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      name: "",
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  }

  submitQuestion(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: `${url}/qa/questions`,
      data: {
        body: this.state.question,
        name: this.state.name,
        email: this.state.email,
        product_id: 42366,
      },
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((res) => console.log(res))
      .then(this.props.handleClose())
      .then(
        this.setState({
          question: "",
          email: "",
          name: "",
        })
      )
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div style={{ background: "white" }}>
        <h2
          style={{
            textAlign: "center",
            textDecoration: "underline",
            padding: "15px",
          }}
        >
          Ask Your Question
        </h2>
        <span style={{ marginLeft: "30px", fontSize: "20px" }}>
          About the {this.props.name}
        </span>
        <div className="modalnf">
          <textarea
            name="question"
            rows="10"
            cols="80"
            fontSize="20px"
            maxLength="1000"
            onChange={this.handleChange}
            value={this.state.question}
          />
        </div>
        <div>
          <div style={{ marginLeft: "30px", marginTop: "10px" }}>
            <div>Your Nickname:</div>
            <input
              className="nicknamenf"
              name="name"
              onChange={this.handleChange}
              type="text"
              maxLength="60"
            />
          </div>
          <div style={{ padding: "10px", marginLeft: "20px" }}>
            <div>Your Email:</div>
            <input
              className="emailnf"
              name="email"
              onChange={this.handleChange}
              type="text"
              maxLength="60"
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={this.submitQuestion}
          style={{
            padding: "10px",
            marginLeft: "20px",
            background: "white",
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          Submit
        </button>
        <button
          type="button"
          style={{
            padding: "10px",
            float: "right",
            marginRight: "20px",
            background: "white",
            marginTop: "30px",
            border: "none",
            textDecoration: "underline",
            color: "rgb(87, 86, 86)",
            marginBottom: "20px",
          }}
          onClick={this.props.handleClose}
        >
          Cancel
        </button>
      </div>
    );
  }
}

export default QuestionsModal;
