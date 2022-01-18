import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../redux/todoSlice";

interface IProps {
  title: string,
  description?: string,
  completed: boolean
  id: string
}
const TodoItem: React.FC<IProps> = ({ title, description, id, completed }) => {
  const [currentTodo, setCurrentTodo] = useState<IProps>({ title, description, id, completed })

  const dispatch = useDispatch()

  const deleteTodo = () => {
    dispatch(removeTodo(id))
  }
  const editTodo = () => {
    console.log(currentTodo);
    // dispatch(updateTodo(id))
  }

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button onClick={editTodo}>Remove</button>
      <button onClick={deleteTodo}>Remove</button>
    </div>
  )
}

export default TodoItem
