import React, { Component } from 'react'

export default class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  async onSubmit() {
    event.preventDefault()
    let url = `http://localhost:3000/comment/new`
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: this.state.text,
        post_id: this.props.post_id
      }),
      credentials: 'include'
    })
    this.props.getComment()
  }

  render() {
    return (
      <form
        className="form-group pt-1 mt-1"
        onSubmit={this.onSubmit.bind(this)}
      >
        <div className="media container">
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
          <input
            type="textarea"
            name="text"
            onChange={e => this.setState({ text: e.target.value })}
            className="form-control col-11 ml-1 "
            placeholder="comment here.."
          />
        </div>
      </form>
    )
  }
}
