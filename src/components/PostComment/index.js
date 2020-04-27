import React from "react";

import "./styles.css";

function PostComment({ comment }) {
  return (
    <div className="post-comment">
      <div className="post-comment__img">
        <img src={comment.author.avatar} />
      </div>

      <div className="post-comment__message">
        <strong>{comment.author.name} </strong>
        <span>{comment.content}</span>
      </div>
    </div>
  );
}

export default PostComment;
