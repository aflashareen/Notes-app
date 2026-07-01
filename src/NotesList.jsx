import { useState } from "react";

function NotesList({ notes, deleteNote, editNote, archiveNote, }) {

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedBody, setEditedBody] = useState("");

  return (
    <div className="flex flex-wrap gap-4 mt-5 ml-5">
      {notes.map((note, index) => (
        <div key={index}
          className="w-64 p-4 border border-white/20 rounded bg-white/10 backdrop-blur-md shadow-lg text-white transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
              />
              <textarea
                value={editedBody}
                onChange={(e) => setEditedBody(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />

              <button
                onClick={() => {
                  editNote(index, {
                    title: editedTitle,
                    body: editedBody,
                  });
                  setEditingIndex(null);
                }}
                className="text-green-400 mr-3"
              >
                Save
              </button>

              <button
                onClick={() => setEditingIndex(null)}
                className="text-gray-400"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <h2 className="font-bold mb-2">{note.title}</h2>
              <p className="text-sm opacity-90">{note.body}</p>

              <button
                onClick={() => {
                  setEditingIndex(index);
                  setEditedTitle(note.title);
                  setEditedBody(note.body);
                }}
                className="text-blue-400 mr-3 hover:text-blue-600"
              >
                Edit
              </button>
            </>
          )}
          <button
            onClick={() => deleteNote(index)}
            className="absolute top-2 right-2 text-red-400 hover:text-red-600"
          >
            ✕
          </button>

          <button
            onClick={() => archiveNote(index)}
            className="text-yellow-400 hover:text-yellow-500"
          >
             Archive
          </button>

          

        </div>
      ))}
    </div>
  )
}
export default NotesList