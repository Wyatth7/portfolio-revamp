import React, { useRef } from "react";
import Editor from "./Editor/Editor";

const PostEditor = (props) => {
  const editorRef = useRef();

  return (
    <div className="PostEditor">
      <div className="PostEditor__editor">
        <Editor ref={editorRef} />
      </div>
    </div>
  );
};

export default PostEditor;
