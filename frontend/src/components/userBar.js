import React from "react";

export default function UserBar(props) {
  return (
    <form className="form-inline p-1" onSubmit={props.Logout}>
      <small className="float-right text-muted">
        <img
          className="mr-2 bg-light rounded"
          width="50"
          height="50"
          src={`https://i.pravatar.cc/150?u=${props.id}`}
        />
        <span> log in as {props.name}</span>
        <button className="m-3 btn btn-sm btn-danger">Log out</button>
      </small>
    </form>
  );
}
