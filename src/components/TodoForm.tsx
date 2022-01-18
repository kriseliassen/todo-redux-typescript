import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addTodo } from "../redux/todoSlice";
import { useForm, SubmitHandler } from 'react-hook-form'

interface Inputs {
  title: string,
  description: string,
  dueDate: Date
}

const TodoForm = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const { register, handleSubmit, reset, setFocus } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(addTodo(data.title, data.description, data.dueDate));
    reset();
    setFocus('title');
  };

  return (
    <div>
      <h2>Add todo item</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="title"
            {...register('title')}
            required />
          <input
            placeholder="description"
            {...register('description')} />
          <input
            type="datetime-local"
            placeholder="Due date"
            {...register("dueDate", {})} />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default TodoForm
