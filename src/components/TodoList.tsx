import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = (): JSX.Element => {
  const todoList = useSelector((state: RootState) => state.todos.todos);

  const doneItems = todoList.filter(item => item.completed)

  return (
    <div className="w-full p-6 py-12 pt-6 mx-auto bg-yellow-300">
      <div className="w-full px-1 flex justify-between">
        <h2 className="text-lg w-fit font-titan">
          Your to-do list
        </h2>
        <p className="text-sm self-center font-titan text-right">
          {doneItems.length}/{todoList.length} items done
        </p>
      </div>
      <div className="mt-2 flex flex-col gap-2">
        {todoList.length === 0
          ? <p className="text-sm text-center">You don't have any items on your todo list. Why don't you add some?</p>
          : (todoList.map(todo => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              completed={todo.completed} />
          )
          ))}
      </div>
    </div>
  )
}

export default TodoList
