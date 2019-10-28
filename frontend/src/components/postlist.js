import React from 'react'
import Post from './post'
import PostLoader from './loader/postLoader.js'

function generate_post(props) {
  if (props.loading) {
    return (
      <div className="mx-auto w-100">
        <PostLoader />
      </div>
    )
  } else if (props.posts.length > 0) {
    return (
      <div className="col-12 pb-3">
        <div className="pt-3 pb-1 bg-white">
          <div className="pl-3 pr-3">
            {props.posts.map((post, index) => (
              <Post
                key={post._id + '-' + index}
                post={post}
                user={props.user}
                getPost={props.getPost}
              />
            ))}
          </div>
        </div>
      </div>
    )
  } else {
    return <div> -- No result -- </div>
  }
}
export default function PostList(props) {
  return generate_post(props)
}
