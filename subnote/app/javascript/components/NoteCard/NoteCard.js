import React, { useState } from "react";
import PropTypes, { func } from "prop-types";
import styles from "./NoteCard.module.css";
import { convertFromRaw, convertToRaw, Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import axios from "../../handlers/axios";

function NoteCard(props) {
  let date = new Date(props.createDate);

  var options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };

  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createWithContent(convertFromRaw(JSON.parse(props.content)))
  );

  function updatePost() {
    let raw = convertToRaw(editorState.getCurrentContent());
    axios
      .put("/api/v1/notes/" + props.uuid, {
        content: JSON.stringify(raw),
        title: props.title,
      })
      .then((res) => {
        console.log(res);
      });
  }

  function clickMe() {
    updatePost();
  }

  return (
    <div className={props.small ? styles.mainDivSmall : styles.mainDiv}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>{props.title}</h1>
        </div>
        <p>{date.toLocaleDateString("en-US", options)}</p>
      </div>
      <Editor editorState={editorState} onChange={setEditorState} />
      <button onClick={() => clickMe()}>Save</button>
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
