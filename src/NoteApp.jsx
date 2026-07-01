import notesImg from "./assets/notes.webp";
function NoteApp(){
    return (
        <div className="flex flex-row pt-5 px-5 py-5 ">
        <img src={notesImg} alt="Note" className="w-16 h-16 pb-6"/>
        <h1 className="text-3xl font-bold text-white">Keep Notes</h1>
        </div>
    )
    
}
export default NoteApp