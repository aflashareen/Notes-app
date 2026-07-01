import { useState } from "react"
function NotesInp({ setNotes }) {
    const [expanded, setExpanded] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [color, setColor] = useState("#4B5563");

    const handleAdd = () => {
        if (!body.trim()) return;

        setNotes((prev) => [...prev, { title, body, color,},]);

        setTitle("");
        setBody("");
        setColor("#4B5563")
        setExpanded(false);
    }
    return (
        <div>
            <div className="flex flex-col w-64 rounded border border-gray-500 ml-5 px-5 py-5 ">
                {expanded &&
                    (<input
                        className="w-full p-2 bg-gray-600 border text-white placeholder:text-white"
                        type="text"
                        placeholder="Title (Optional)"
                        value={title}
                        maxLength={100}
                        onChange={(e) => setTitle(e.target.value)} />
                    )}
                <textarea
                    className="w-full p-2 bg-gray-600 border shadow-lg text-white placeholder:text-white resize-none outline-none"
                    placeholder="Take a note..."
                    value={body}
                    onFocus={() => setExpanded(true)}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                {expanded && <button type="button" className="text-white border" onClick={handleAdd}>Add</button>}
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-10 h-10 mt-2 cursor-pointer"
                />
            </div>
        </div>
    )
}
export default NotesInp