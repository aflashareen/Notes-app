import { useState } from "react"
function NotesInp({ setNotes }) {
    const [expanded, setExpanded] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    const handleAdd = () => {
        console.log("Title:", title)
        console.log("Body:", body)

        if(!title.trim() && !body.trim()) return;

        setNotes((prev) => [...prev, {title,body,},]);

        setTitle("");
        setBody("");
        setExpanded(false);
    }
    return (
        <div>
            <div className="flex flex-col w-64 rounded border border-gray-500 ml-5 px-5 py-5 ">
                {expanded &&
                    (<input
                        className="w-full p-2 bg-gray-600 border text-white placeholder:text-white"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                    )}
                <textarea
                    className="w-full p-2 bg-gray-600 border shadow-lg text-white placeholder:text-white resize-none outline-none"
                    placeholder="Take a note..."
                    value={body}
                    onFocus={() => setExpanded(true)}
                    onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                {expanded && <button type="button" className="text-white border" onClick={handleAdd}>Add</button>}
            </div>
        </div>
    )
}
export default NotesInp