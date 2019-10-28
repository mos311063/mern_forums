import React from 'react'
import moment from 'moment'

export default function Comment(props) {
  const { text, created: date, user_id } = props.comment
  name = user_id ? user_id.name : 'anonymous'
  let time = moment(date).fromNow()
  const anonymous =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  let link
  user_id
    ? (link = `https://i.pravatar.cc/150?u=${user_id._id}`)
    : (link = anonymous)

  return (
    <div className="media mb-2">
      <img
        className="mr-3 bg-light rounded"
        width="45"
        height="45"
        src={link}
      />
      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{time}</small>
        <p className="text-muted">
          reply by <strong> {name} </strong>{' '}
        </p>
        <div className="container">{text}</div>
      </div>
    </div>
  )
}
