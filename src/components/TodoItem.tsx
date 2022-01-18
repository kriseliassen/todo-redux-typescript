interface IProps {
  title: string,
  description?: string,
  completed: boolean
  id: string
}
const TodoItem: React.FC<IProps> = ({ title, description, id, completed }) => {

  const removeTodo = () => {
    console.log(id)
  }

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button onClick={removeTodo}>Remove</button>
    </div>
  )
}

export default TodoItem
