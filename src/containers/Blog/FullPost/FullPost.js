import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    fullPost: null,
  };
  componentDidMount() {
    console.log(this.props);
    this.loadData();
  }
  componentDidUpdate(){
    this.loadData();
  }
  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.fullPost ||
        (this.state.fullPost && this.state.fullPost.id !== +this.props.match.params.id)
      ) {
        axios.get(`posts/${this.props.match.params.id}`).then((res) => {
          this.setState({ fullPost: res.data });
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete(`posts/${this.props.match.params.id}`).then((res) => {
      console.log(res);
    });
  };
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.state.fullPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.fullPost.title}</h1>
          <p>{this.state.fullPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
