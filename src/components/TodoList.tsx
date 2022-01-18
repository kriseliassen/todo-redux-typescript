import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todoList = useSelector((state: RootState) => state.todos.todos);

  return (
    <div>
				{todoList.map(todo => (
          <TodoItem 
            key={todo.id}
            id={todo.id}
            title={todo.title} 
            description={todo.description} 
            completed={todo.completed}/>
				))}
			</div>
  )
}

export default TodoList
