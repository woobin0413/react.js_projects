import React, { Component } from "react";

class Post extends Component {
  render() {
    const post = this.props.children;

    return (
      <div>
        <div>{post.title}</div>
        <div>
          <img src={post.url} alt="" width="100%" />
        </div>

        <div>
          <p>{post.text}</p>
        </div>
      </div>
    );
  }
}

export default Post;
