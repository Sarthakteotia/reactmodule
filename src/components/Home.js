import React from 'react'
import Notes from './Notes'
import MainContent from './MainContent'
import useNoteContext from '../hooks/useNoteContext';
import NotesScreen from './notesScreen/NotesScreen';

const Home = () => {
  const { selected } = useNoteContext();

  return (
    <div className='homepage'>
            {console.log("slected", selected)}

        <Notes/>
      {selected?.length > 0 ? <NotesScreen/>: <MainContent/>}
    </div>
  )
}

export default Home