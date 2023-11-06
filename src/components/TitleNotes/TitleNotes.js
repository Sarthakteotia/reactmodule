import React from "react";
import useNoteContext from  "../../hooks/useNoteContext";
import "./TitleNotes.css";


function TitleNotes({ title }) {
  console.log(title,"tile")
  const { selected, setSelected } = useNoteContext();
  console.log(selected,"setSelected")
  const nameInitals = title[0].name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  const newTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const handleTitleClick = () => {
   
    setSelected(title[0].name);
  };

  return (
    <div
      onClick={handleTitleClick}
      className={`group-title-logo ${
        selected === title[0].name ? "highlighted-title" : null
      }`}
    >
      <div className="title-logo" style={{ backgroundColor: title[0].color }}>
        {nameInitals}
      </div>
      <div className="group-title">{newTitle}</div>
    </div>
  );
}

export default TitleNotes;
