import React, { Component } from "react";
import Post from "./post";

const divStyle = {
  backgroundColor: "blue",
  border: "5px solid pink"
};

class Posts extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          {posts.map(post => (
            <div className="col-md-3" key={post.id} style={divStyle}>
              <Post>{post}</Post>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;
