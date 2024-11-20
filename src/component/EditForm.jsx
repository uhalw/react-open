import { useState } from "react"
function EditForm({todo, editTodo}) {

    // build input hook
    const [content, setContent] = useState(todo.content);

    // e is event
    const handleSubmit = (e) => {
        // cancel default action
        e.preventDefault();
        // add todo content
        editTodo(todo.id, content)
    }

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input type="text"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value)
                }}
            />
            <button type="submit">OK</button>
        </form>
    )
}
export default EditForm