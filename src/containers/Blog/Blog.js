import React, { Component } from "react";
// import axios from "axios";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectPostId: null,
    error: false,
  };
  componentDidMount() {
    axios
      .get("/posts")
      .then((res) => {
        const posts = res.data.slice(0, 4);
        const updatedPosts = posts.map((el) => {
          return { ...el, author: "max" };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: true });
      });
  }
  selectPostHandler(id) {
    this.setState({ selectPostId: id });
  }
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong..</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((el) => {
        return (
          <Post
            key={el.id}
            title={el.title}
            author={el.author}
            clicked={() => {
              this.selectPostHandler(el.id);
            }}
          />
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
