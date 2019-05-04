import React, { Component } from "react";
import ImageUploader from "react-images-upload";

class Addpost extends Component {
  render() {
    console.log("Add post");

    return (
      <React.Fragment>
        <form
          style={{ float: "left" }}
          method="POST"
          encType="multipart/form-data"
          action="addpost"
        >
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
            maxFileSize={5242880}
            type="file"
            name="userfile"
            className="form-control-file"
            aria-describedby="fileHelp"
          />
          <div className="form-group">
            <label>Post Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="post title.."
            />
          </div>
          {/* <div className="form-group">
            <label>File input</label>
            <input
              type="file"
              name="userfile"
              className="form-control-file"
              aria-describedby="fileHelp"
            />
          </div> */}

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

export default Addpost;
