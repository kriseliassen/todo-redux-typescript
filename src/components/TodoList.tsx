import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = (): JSX.Element => {
  const todoList = useSelector((state: RootState) => state.todos.todos);

  const doneItems = todoList.filter(item => item.completed)

  return (
    <div>
      <h2>Your todo list</h2>
      <p>{doneItems.length}/{todoList.length} items done</p>
      {todoList.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          dueDate={todo.dueDate}
          completed={todo.completed} />
      )
      )}
    </div>
  )
}

export default TodoList
