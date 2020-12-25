import React, { Component } from "react";
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class ProfileAvatar extends Component {
  state = {
    image: this.props.user && this.props.user.avatar_url,
  };

  handleDrop = (dropped) => {
    this.setState({ image: dropped[0] });
  };

  onClickSave = () => {
    if (this.editor) {
      console.log("clicked saved profile avatar edit");
      const canvas = this.editor.getImage().toDataURL();
      console.log(canvas);
    }
  };

  setEditorRef = (editor) => (this.editor = editor);

  render() {
    return (
      <>
        <Dropzone
          onDrop={this.handleDrop}
          noClick
          noKeyboard
          style={{ width: "250px", height: "250px" }}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <AvatarEditor
                ref={this.setEditorRef}
                image={this.state.image}
                width={250}
                height={250}
                border={50}
                color={[255, 255, 255, 0.6]} // RGBA
                scale={1.2}
                rotate={0}
              />
              <input {...getInputProps()} />
            </div>
          )}
        </Dropzone>
        <Button variant="dark" onClick={this.onClickSave}>
          Save Avatar
        </Button>
      </>
    );
  }
}
