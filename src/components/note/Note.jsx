import React from "react";
import "./Note.scss";

function Note(props) {
  return (
    <div className="note">
      <h1 className="note__title">{props.title}</h1>
      <p className="note__content">{props.content}</p>
    </div>
  );
}

export default Note;
