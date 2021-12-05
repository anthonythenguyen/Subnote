import React from "react";
import PropTypes from "prop-types";
import styles from "./RelativeNotes.module.css";
import NoteCard from "../../../components/NoteCard/NoteCard";

function RelativeNotes(props) {
  return (
    <div className={styles.mainDiv}>
      {props.notes.map((ele) => {
        return (
          <NoteCard
            small
            key={ele.uuid}
            content={ele.content}
            title={ele.title}
            createDate={ele.created_at}
          />
        );
      })}
    </div>
  );
}

RelativeNotes.propTypes = {
  notes: PropTypes.array,
};

export default RelativeNotes;
