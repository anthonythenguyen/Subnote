import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import styles from "./Notes.module.css";
import axios from "../../handlers/axios";

function Notes(props) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/notes").then((res) => {
      setNotes((prev) => res.data);
    });
  }, []);

  function updatePost(uuid) {
    axios
      .put("/api/v1/notes/" + uuid, {
        bruh: "bruh",
        notBurh: "lol",
      })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div className={styles.mainDiv}>
      <Header />
      {notes.map((ele) => {
        return (
          <button onClick={() => updatePost(ele.uuid)} key={ele.uuid}>
            CLICK ME DADDY
          </button>
        );
      })}
    </div>
  );
}

Notes.propTypes = {};

export default Notes;
