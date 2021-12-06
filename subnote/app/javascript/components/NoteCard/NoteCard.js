import React, { useState } from "react";
import PropTypes, { func } from "prop-types";
import styles from "./NoteCard.module.css";
import { convertFromRaw, convertToRaw, Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import axios from "../../handlers/axios";
import Spinner from "../Spinner/Spinner";

function NoteCard(props) {
  let date = new Date(props.createDate);

  var options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };

  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(convertFromRaw(JSON.parse(props.content)))
  );

  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [timeoutHandle, setTimeoutHandle] = useState(null);

  function updatePost() {
    let raw = convertToRaw(editorState.getCurrentContent());
    axios
      .put("/api/v1/notes/" + props.uuid, {
        content: JSON.stringify(raw),
        title: props.title,
      })
      .then((res) => {
        console.log(res);
        setUnsavedChanges(false);
      });
  }

  function textBoxChanged(setStateFunction) {
    window.clearTimeout(timeoutHandle);
    setUnsavedChanges(true);
    setTimeoutHandle(window.setTimeout(updatePost, 1000));
    setEditorState(setStateFunction);
  }

  return (
    <div className={props.small ? styles.mainDivSmall : styles.mainDiv}>
      <div className={styles.header}>
        <h1 className={styles.title}>{props.title}</h1>
        {unsavedChanges ? (
          <>
            <Spinner />
          </>
        ) : null}
        <p>{date.toLocaleDateString("en-US", options)}</p>
      </div>
      <Editor
        editorState={editorState}
        onChange={textBoxChanged}
        placeholder="Begin your story"
      />
    </div>
  );
}

NoteCard.propTypes = {
  title: PropTypes.string,
  createDate: PropTypes.string,
  content: PropTypes.string,
  uuid: PropTypes.string,
};

export default NoteCard;
