import { useState } from "react"

function CreateForm({ addTodo }) {

    // build input hook
    const [content, setContent] = useState('');
    // e is event
    const handleSubmit = (e) => {
        // cancel default action
        e.preventDefault();
        // add todo content
        addTodo(content);
        setContent('');
    }

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter todo"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value)
                }}
            />
            <button type="submit">add</button>
        </form>
    )
}
export default CreateForm