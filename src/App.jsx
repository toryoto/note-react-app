import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from 'react-uuid'

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState();

  const onAddNote = () => {
    console.log("ノートが作られました");
    const newNote = {
      id: uuid(),
      title: "新しいnote",
      content: "新しいnoteの内容",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes)
  };

  // setNotesでは前の状態を引数で受け取り、新しい状態をreturnで返す必要がある
  // filterメソッドでは新たな配列を作成するためにreturnが必要
  const onDeleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id
      });
    });
  };

  // アクティブなノート（選択されたノート）のオブジェクトを取得するメソッド
  const getActiveNoteObj = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        notes={notes} 
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNoteObj()} />
    </div>
  )
}

export default App
