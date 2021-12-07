import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import styles from "./Notes.module.css";
import axios from "../../handlers/axios";
import RelativeNotes from "./RelativeNotes/RelativeNotes";
import CurrentNotes from "./CurrentNotes/CurrentNotes";
import ToolBars from "./ToolBars/ToolBars";

function getData(setNotes) {
  axios.get("/api/v1/notes").then((res) => {
    setNotes((prev) => res.data);
  });
}

function Notes(props) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getData(setNotes);
  }, []);

  return (
    <div className={styles.mainDiv}>
      <Header />
      <div className={styles.contentDiv}>
        <CurrentNotes notes={notes} refreshData={() => getData(setNotes)} />
        <ToolBars />
      </div>
    </div>
  );
}

Notes.propTypes = {};

export default Notes;
