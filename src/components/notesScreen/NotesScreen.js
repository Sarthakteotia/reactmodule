import React, { useEffect, useState } from 'react'
import useNoteContext from '../../hooks/useNoteContext';

function NotesScreen() {
    const [text, setText] = useState("");
    const [color, setColor] = useState("#fff");
    const [initials, setInitials] = useState("");
    const [selectedHeading, setSelectedHeading] = useState("");
    const { notes, setNotes, selected } = useNoteContext();
  
    useEffect(() => {
      setNotes(JSON.parse(localStorage.getItem(selected)) || []);
      const groupNames = JSON.parse(localStorage.getItem("groupNames"));
      const selectedGroup = groupNames?.find((group) => group.name === selected);
      if (selectedGroup) {
        setColor(selectedGroup.color);
        setInitials(
          selectedGroup.name
            .split(" ")
            .map((word) => word.charAt(0))
            .join("")
            .toUpperCase()
        );
        setSelectedHeading(
          selectedGroup.name
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        );
      }
    }, [selected, setNotes]);
  
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSaveNotes();
      }
    };
  
    const handleSaveNotes = () => {
      if (!text.trim()) {
        return;
      }
      const notes = JSON.parse(localStorage.getItem(selected)) || [];
      const newNoteObj = {
        id: Date.now(),
        title: selected,
        content: text.trim(),
        date: new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        }),
        time: new Date().toLocaleTimeString(),
      };
      notes.push(newNoteObj);
      localStorage.setItem(selected, JSON.stringify(notes));
      setText("");
      setNotes(notes);
    };
  
    const handleChange = (e) => {
      setText(e.target.value);
    };
  return (
    <div className="notes">
      <div className="notes-title">
        <div
          className="notes-title-color"
          style={{backgroundColor:color}}
         >
          {initials} 
        </div>
        <div className='selected-heading'>{selectedHeading}</div>
        <div className="notes-title-text"></div>
      </div>
      <div className="notes-content">
        {notes && notes.length > 0
          ? notes.map((note, index) => (
            <div className="notes-content-note">
            <div className="notes-content-date-time-details">
              <div className="notes-content-date">{note.date}</div>
              <div className="notes-content-time">{note.time}</div>
            </div>
            <div className="notes-content-details">
              <p>{note.content}</p>
            </div>
          </div>
            ))
          : null}
      </div>
      <div className="notes-input">
        <textarea
          value={text}
          placeholder="Enter your notes here"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <img 
        src="https://cdn2.iconfinder.com/data/icons/login-2/24/login-2-512.png"
         alt="enter" onClick={handleSaveNotes} />
      </div>
    </div>
  )
}

export default NotesScreen