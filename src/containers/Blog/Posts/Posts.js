import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";
// import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then((res) => {
        const posts = res.data.slice(0, 4);
        const updatedPosts = posts.map((el) => {
          return { ...el, author: "Rahul" };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: true });
      });
  }
  selectPostHandler(id) {
    // this.props.history.push({pathname:"/"+id});
    this.props.history.push("/posts/" + id);
    // this.setState({ selectPostId: id });
  }
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong..</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((el) => {
        return (
          //   <Link to={'/'+el.id} key={el.id}>
          <Post
            key={el.id}
            title={el.title}
            author={el.author}
            clicked={() => {
              this.selectPostHandler(el.id);
            }}
          />
          //   </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url+"/:id"} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
