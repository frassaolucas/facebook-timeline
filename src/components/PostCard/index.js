import React, { Component } from "react";

import "./styles.css";

import PostComment from "../PostComment";

function PostCard({ post }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="post-header__img">
          <img src={post.author.avatar} />
        </div>

        <div className="post-header__info">
          <div className="post-user">{post.author.name}</div>
          <div className="post-date">{post.date}</div>
        </div>
      </div>

      <div className="post-message">{post.content}</div>

      <div className="post-comments">
        {post.comments.map((comment) => (
          <PostComment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default PostCard;
