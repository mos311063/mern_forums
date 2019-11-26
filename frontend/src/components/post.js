import React from "react";
import moment from "moment";
import CommentList from "./commentlist";

export default function Post(props) {
  const { title, body, created: date, user_id } = props.post;
  let time = moment(date).fromNow();
  let anonymous =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  let link;
  user_id
    ? (link = `https://i.pravatar.cc/150?u=${user_id._id}`)
    : (link = anonymous);
  let name = user_id ? user_id.name : "anonymous";

  const deletePost = async e => {
    e.preventDefault();
    let url = `https://polar-temple-62918.herokuapp.com/post`;
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        post_id: props.post._id
      }),
      credentials: "include"
    })
      .then(resp => {
        if (resp.status != 200) throw "not succesfully delete";
        // else return resp.json()
      })
      .catch(err => {
        alert(err);
      });
    props.getPost();
  };

  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="45"
        height="45"
        src={link}
        alt={title}
      />
      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <div className="media-body p-2 shadow-sm rounded bg-light border mb-2">
          <small className="float-right text-muted">{time}</small>
          <h6 className="mt-0 mb-1 text-muted">{title}</h6>
          <div className="container">
            {body}
            <button
              className="btn btn-danger float-right p-2 btn-outline-danger "
              onClick={e => {
                deletePost(e);
              }}
            >
              <small className="text-mute">✕</small>
            </button>
          </div>
          <small className="text-muted">
            post by <strong>{name}</strong>
          </small>
        </div>
        <CommentList
          key={props.post._id}
          post_id={props.post._id}
          user={user_id}
          login_user={props.user}
        />
      </div>
    </div>
  );
}
