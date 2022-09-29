import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";
import asyncComponent from "../../hoc/asyncComponent";
import { Route, NavLink, Switch ,Redirect } from "react-router-dom";
// import FullPost from "./FullPost/FullPost";

const AsyncNewPost = asyncComponent(()=>{
  return import('./NewPost/NewPost');
})

class Blog extends Component {
  state = {
    auth:true,
  }
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={()=><h1>home 1</h1>}/>
        <Route path="/" render={()=><h1>home 2</h1>}/> */}
        <Switch>
        {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
        <Route path="/posts"  component={Posts} />
        {/* <Route render={()=><h1>Not found</h1>}/> */}
        <Redirect from="/" to="posts"/>
        {/* <Route path="/"  component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
