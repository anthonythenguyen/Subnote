import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import styles from "./Notes.module.css";
import axios from "../../handlers/axios";
import RelativeNotes from "./RelativeNotes/RelativeNotes";
import CurrentNotes from "./CurrentNotes/CurrentNotes";
import ToolBars from "./ToolBars/ToolBars";

function Notes(props) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/notes").then((res) => {
      console.log(res.data);
      setNotes((prev) => res.data);
    });
  }, []);

  return (
    <div className={styles.mainDiv}>
      <Header />
      <div className={styles.contentDiv}>
        <CurrentNotes notes={notes} />
        <ToolBars />
      </div>
    </div>
  );
}

Notes.propTypes = {};

export default Notes;
