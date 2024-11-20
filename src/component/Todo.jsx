import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEdit, editTodo }) {
    // const handleDelete = () => {
    //     deleteTodo(todo.id);



    // 上是js 可用for, if等迴圈
    // 下是jsx 可用map迴圈
    return (
        todo.isEdit

            // add a completed
            // use反引號三元運算子檢查isCompleted
            // if true, apply completed
            // if false, cancel comleted
            ? <EditForm todo={todo} editTodo={editTodo} />

            : <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
                <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
                <div>
                    < MdEdit
                        onClick={() => { toggleIsEdit(todo.id) }}
                        style={{ cursor: 'pointer' }}
                    />
                    <MdDelete
                        onClick={() => { deleteTodo(todo.id) }}
                        style={{ cursor: 'pointer', marginLeft: '5px' }} />
                </div>
            </div>
    )
}

export default Todo
