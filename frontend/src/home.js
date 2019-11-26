import React, { Component } from "react";
import PostList from "./components/postlist";
import Navbar from "./components/navbar";
import PostForm from "./components/postForm.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      user: "anonymous",
      loading: false
    };
    this.setSearch = this.setSearch.bind(this);
    this.setUser = this.setUser.bind(this);
    this.getPost = this.getPost.bind(this);
  }
  componentDidMount() {
    this.getPost();
  }

  async getPost() {
    this.setState({ loading: true });
    try {
      const res = await fetch(
        "https://polar-temple-62918.herokuapp.com/post/all"
      ).then(res => res.json());
      this.setState({
        posts: res,
        loading: false
      });
    } catch (err) {
      this.setState({ loading: false });
    }
  }

  async setSearch(search) {
    this.setState({ loading: true });
    let url = `https://polar-temple-62918.herokuapp.com/post/all/${search}`;
    try {
      const res = await fetch(url, { credentials: "include" }).then(res =>
        res.json()
      );
      this.setState({
        posts: res,
        loading: false
      });
    } catch (err) {
      this.setState({
        posts: [],
        loading: false
      });
    }
  }

  setUser(user) {
    if (user != "") this.setState({ user: user });
    else this.setState({ user: "anonymous" });
  }

  render() {
    return (
      <div className="container bg-light shadow mt-3 mb-3">
        <Navbar
          search={this.state.search}
          setSearch={this.setSearch}
          setUser={this.setUser}
        />
        <PostForm login_user={this.state.user} getPost={this.getPost} />
        <PostList
          loading={this.state.loading}
          posts={this.state.posts}
          user={this.state.user}
          getPost={this.getPost}
        />
      </div>
    );
  }
}
