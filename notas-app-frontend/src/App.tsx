import React from 'react';
import NoteList from './components/NoteList/NoteList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Aplicativo de Notas</h1>
      <NoteList />
    </div>
  );
};

export default App;