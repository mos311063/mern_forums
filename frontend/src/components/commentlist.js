import React, { Component } from "react";
import Comment from "./comment";
import CommentForm from "./commentForm.js";

export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: [],
      loading: true
    };
    this._isMounted = false;
    this.generateComments = this.generateComments.bind(this);
    this.getComment = this.getComment.bind(this);
  }

  componentDidMount() {
    this.getComment();
  }

  getComment() {
    this._isMounted = true;
    this.setState({ loading: true });
    let url = `https://polar-temple-62918.herokuapp.com/comment/${this.props.post_id}`;
    fetch(url)
      .then(resp => {
        return resp.json();
      })
      .then(comment => {
        if (this._isMounted)
          this.setState({ comment: comment, loading: false });
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.setState({ comment: "", loading: true });
  }

  generateComments() {
    if (this._isMounted) {
      return this.state.comment.map((comment, index) => (
        <Comment key={"comment-" + index} comment={comment} />
      ));
    } else <img src={"./ajax-loader.gif"} alt="logo" />;
  }

  render() {
    return this.state.loading ? (
      <img src={"./ajax-loader.gif"} alt="logo" />
    ) : (
      <>
        <div className="pl-1">{this.generateComments()}</div>
        <CommentForm
          getComment={this.getComment}
          post_id={this.props.post_id}
          login_user={this.props.login_user}
          getComment={this.getComment}
        />
      </>
    );
  }
}
