import React ,{useState,useEffect}from 'react'
import Modal from './Modal'
import TitleNotes from './TitleNotes/TitleNotes';

const Notes = () => {
  const [titles, setTitles] = useState([]);
  const [groupNamesParent, setGroupNamesParent] = useState(
    localStorage.getItem("groupNames") || []
  );

  useEffect(() => {
    const data = localStorage.getItem("groupNames");
    if (data) {
      setGroupNamesParent(JSON.parse(data));
    } else {
      setGroupNamesParent([]);
    }
  }, []);

  useEffect(() => {
    if (groupNamesParent.length > 0) {
      const obj = JSON.parse(localStorage.getItem("groupNames"));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setTitles(result);
    }
  }, [groupNamesParent]);

  return (
    <div className='sidebar'>
      <div className='pocket-notes-title'>
       <p> Pocket Notes </p>
       </div>
       <Modal groupNamesParent={groupNamesParent}
            setGroupNamesParent={setGroupNamesParent}/>
       {titles.length > 0 ? (
          titles.map((title, index) => <TitleNotes key={index} title={title} />)
        ) : (
          <div className="desktop__sidebar__notes__title__empty">
            <p>No Notes Group Created</p>
          </div>
        )}
       </div>
  )
}

export default Notes