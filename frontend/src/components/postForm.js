import React, { Component } from 'react'
import TextareaAutosize from 'react-autosize-textarea'
export default class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  async onSubmit() {
    event.preventDefault()
    let url = `http://localhost:3000/post/new`
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body
      }),
      credentials: 'include'
    })
    this.setState({
      title: '',
      body: ''
    })
    this.props.getPost()
  }

  render() {
    return (
      <form
        className="form-group pt-1 mt-1"
        onSubmit={this.onSubmit.bind(this)}
      >
        <div className="media">
          <span className="mx-auto">
            <img
              className=" bg-light rounded"
              width="40"
              height="40"
              src={
                this.props.login_user == 'anonymous'
                  ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                  : `https://i.pravatar.cc/150?u=${this.props.login_user}`
              }
            />
          </span>
          <div className="media-body  mx-2 p-2 shadow-sm rounded bg-light border">
            <small className="form-text text-muted mb-1">
              {' '}
              create post ..{' '}
            </small>
            <TextareaAutosize
              maxRows={2}
              name="title"
              onChange={e => this.setState({ title: e.target.value })}
              value={this.state.title}
              className="form-control col-sm-6"
              placeholder="title.."
              required
            />
            <br />
            <TextareaAutosize
              rows={3}
              maxRows={6}
              name="body"
              onChange={e => this.setState({ body: e.target.value })}
              value={this.state.body}
              className="form-control"
              placeholder="body.."
              required
            />
            <br />

            <button className="btn btn-success"> Post </button>
          </div>
        </div>
      </form>
    )
  }
}
