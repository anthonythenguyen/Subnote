import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./CurrentNotes.module.css";
import NoteCard from "../../../components/NoteCard/NoteCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../handlers/axios";
import Modal from "../../../components/Modal/Modal";
import Button from "../../../components/Button/Button";
import TextInput from "../../../components/TextInput/TextInput";

function CurrentNotes(props) {
  const [showModal, setShowModal] = useState(false);
  const [titleText, setTitleText] = useState("");
  function createNewNote() {
    axios
      .post("api/v1/notes", {
        title: titleText,
      })
      .then((res) => {
        if (res.status === 200) {
          setShowModal(false);
          props.refreshData();
        }
      });
  }

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
        <div className={styles.newNote} onClick={() => setShowModal(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
      {showModal ? (
        <Modal>
          <label>Title</label>
          <TextInput
            onChange={(e) => setTitleText(e.target.value)}
            value={titleText}
          />
          <Button small={true} onClick={createNewNote}>
            Create
          </Button>
        </Modal>
      ) : null}
    </div>
  );
}

CurrentNotes.propTypes = {
  notes: PropTypes.array,
};

export default CurrentNotes;
