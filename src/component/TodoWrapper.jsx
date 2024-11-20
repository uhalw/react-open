import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"


function TodoWrapper() {
    // Initialize todos with unique id and content
    // Added 'isCompleted' to track the completion state of each todo
    const [todos, setTodos] = useState([
        { content: 'List1', id: Math.random(), isCompleted: false, isEdit: false },
        { content: 'List2', id: Math.random(), isCompleted: false, isEdit: false },
    ]);

    // Function to add a new todo
    const addTodo = (content) => {
        setTodos([...todos, { content: content, id: Math.random(), isCompleted: false, isEdit: false }])
    }
    // Function to delete a todo by id
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id
        }))
    }
    // Function to toggle the completion state of a todo
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
        }))
    }
    // built a 'if revise' the f(x)(雙向)
    const toggleIsEdit = (id) => {
        setTodos(todos.map((todo) => {
            // 1.逐步檢查目前todo.id是否等於被修改的id
            return todo.id === id
                ? { ...todos, isEdit: !todo.isEdit }
                : todo
        }))
    }

    const editTodo = (id, newContent) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, content: newContent, isEdit: false }
                : todo
        }))
    }

return (
    <div className="wrapper">
        <h1>To-Do List</h1>
        <br />
        {/* Pass addTodo function to CreateForm */}
        <CreateForm addTodo={addTodo} />
        {
            todos.map((todo) => {                        // Pass each todo, deleteTodo, and toggleCompleted function to Todo
                    return<Todo todo={todo} key={todo.id}

            deleteTodo={deleteTodo}
            toggleCompleted={toggleCompleted} // Add toggleCompleted here
            toggleIsEdit={toggleIsEdit}
            editTodo={editTodo}
        />
            })
            }
    </div>
)
}
export default TodoWrapper