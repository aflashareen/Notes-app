
function NotesArchive({ archivedNotes, unarchiveNote }) {
  return (
    <div className="flex flex-wrap gap-4 mt-5 ml-5">
      {archivedNotes.map((note, index) => (
        <div
          key={index}
          className="w-64 p-4 border border-white/20 rounded bg-white/10 backdrop-blur-md shadow-lg text-white"
        >
          <h2 className="font-bold">{note.title}</h2>
          <p>{note.body}</p>

          <button onClick={() => unarchiveNote(index)}
           className="mt-3 px-3 py-1 bg-blue-500 rounded hover:bg-green-600" >Unarchive</button>
        </div>
      ))}
    </div>
  );
}

export default NotesArchive;