import React from "react";
import PropTypes from "prop-types";
import styles from "./CurrentNotes.module.css";
import NoteCard from "../../../components/NoteCard/NoteCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function CurrentNotes(props) {
  return (
    <div className={styles.mainDiv}>
      {props.notes.map((ele) => {
        return (
          <NoteCard
            key={ele.uuid}
            uuid={ele.uuid}
            content={ele.content}
            title={ele.title}
            createDate={ele.created_at}
          />
        );
      })}
      <div className={styles.newNoteContainer}>
        <div className={styles.newNote}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </div>
  );
}

CurrentNotes.propTypes = {
  notes: PropTypes.array,
};

export default CurrentNotes;
