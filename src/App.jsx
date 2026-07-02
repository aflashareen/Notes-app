import { useState, useEffect } from 'react'
import NoteApp from './NoteApp'
import NotesInp from './NotesInp'
import NotesList from './NotesList'
import NotesArchive from './NotesArchive'

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const [archivedNotes, setArchivedNotes] = useState(() => {
    const saved = localStorage.getItem("archivedNotes");
    return saved ? JSON.parse(saved) : [];
  });

  const [showArchive, setShowArchive] = useState(false);


  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem(
      "archivedNotes",
      JSON.stringify(archivedNotes)
    );
  }, [archivedNotes]);
  const pinNote = (index) => {
    setNotes((prev) => {
    const updatedNotes = prev.map((note, i) =>
        i === index ? { ...note, isPinned: !note.isPinned } : note
      );

      updatedNotes.sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

      return updatedNotes;
    });
  };


  const deleteNote = (index) => {
    setNotes((prev) => prev.filter((_, i) => i !== index))
  }

  const editNote = (index, updatedNote) => {
    setNotes((prev) =>
      prev.map((note, i) => (i === index ? updatedNote : note))
    );
  };
  const archiveNote = (index) => {
    const note = notes[index];

    setArchivedNotes([...archivedNotes, note]);

    setNotes(notes.filter((_, i) => i !== index));
  };

  const unarchiveNote = (index) => {
    const note = archivedNotes[index];

    setNotes((prev) => [...prev, note]);

    setArchivedNotes((prev) => prev.filter((_, i) => i !== index));
  }




  return (
    <div className='bg-gray-700 w-full h-screen shadow'>
      <NoteApp />
      <NotesInp setNotes={setNotes} />
      <NotesList notes={notes}
        deleteNote={deleteNote}
        editNote={editNote}
        archiveNote={archiveNote}
        pinNote={pinNote}
      />
      <NotesArchive
        archivedNotes={archivedNotes}
        unarchiveNote={unarchiveNote} />
    </div>
  )
}

export default App
