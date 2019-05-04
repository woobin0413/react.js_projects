import React, { Component } from "react";

class PostDetail extends Component {
  render() {
    const { customers } = this.props;

    const id = this.props.match.params.id;
    // const image_url = "user/images/";

    // The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.

    return (
      <React.Fragment>
        <div>
          {customers.map(c => (
            <div key={c.id}>
              {c.id == id && (
                <h1>
                  {c.image} <br /> {c.description}
                </h1>
              )}
            </div>
          ))}
        </div>
        <form
          style={{ float: "left" }}
          method="POST"
          encType="multipart/form-data"
          action="addpost"
        >
          <div className="form-group">
            <label>Post Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="post title.."
            />
          </div>
          <div className="form-group">
            <label>File input</label>
            <input
              type="file"
              name="userfile"
              className="form-control-file"
              aria-describedby="fileHelp"
            />
          </div>

          <div className="form-group">
            <label>Post Description</label>
            <br />
            <textarea name="description" rows="10" cols="30" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default PostDetail;
