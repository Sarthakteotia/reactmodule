import { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import useNoteContext, { Provider } from './hooks/useNoteContext';

function App() {
  const { selected, setSelected } = useNoteContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    // eslint-disable-next-line
  }, [selected]);
  return (
    <div className="App">
      <Provider>

      <Home />
      </Provider>
    </div>
  );
}

export default App;
